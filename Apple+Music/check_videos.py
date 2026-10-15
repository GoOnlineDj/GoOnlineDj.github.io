"""Read-only checker for AppleMusicVideos.js. Never modifies the file.

Usage:
    python check_videos.py            # data checks only (instant)
    python check_videos.py --links    # also request every URL (slow, needs internet)
"""
import re
import sys
import urllib.request
import urllib.error
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

FILE = Path(__file__).with_name("AppleMusicVideos.js")
URL_RE = re.compile(r"^https://embed\.music\.apple\.com/[a-z]{2}/music-video/[^/\s]+/\d+$")

text = FILE.read_text(encoding="utf-8")

# Split into artist blocks, then pull songs out of each one
artists = []
for m in re.finditer(r'artist:\s*(["\'])(.*?)\1(.*?)(?=\n\s*artist:|\Z)', text, re.S):
    name, body = m.group(2), m.group(3)
    songs = re.findall(r'title\s*:\s*(["\'`])(.*?)\1\s*,\s*src\s*:\s*(["\'`])(.*?)\3', body, re.S)
    artists.append((name, [(s[1], s[3]) for s in songs], len(re.findall(r"\bsrc\s*:", body))))

problems = []

# Artist-level checks
seen_artist = defaultdict(int)
for name, songs, src_count in artists:
    seen_artist[name.strip().lower()] += 1
    if name != name.strip():
        problems.append(f"Artist has leading/trailing space: {name!r}")
    if not songs:
        problems.append(f"Artist has no songs: {name}")
    if src_count != len(songs):
        problems.append(f"Artist has a song entry the checker could not parse: {name}")
for k, n in seen_artist.items():
    if n > 1:
        problems.append(f"Artist listed {n} times: {k}")

# Song-level checks
by_url = defaultdict(list)
all_urls = []
for name, songs, _ in artists:
    seen_title = set()
    for title, src in songs:
        by_url[src].append(f"{name} - {title}")
        all_urls.append(src)
        if not title.strip():
            problems.append(f"Empty title for {name} ({src})")
        if title.lower() in seen_title:
            problems.append(f"Duplicate title under {name}: {title}")
        seen_title.add(title.lower())
        if not URL_RE.match(src):
            problems.append(f"Odd URL for {name} - {title}: {src}")
for src, owners in by_url.items():
    if len(owners) > 1:
        problems.append(f"Same video listed {len(owners)} times: {src}\n      " + "\n      ".join(owners))

print(f"{len(artists)} artists, {len(all_urls)} songs, {len(by_url)} unique URLs")

if "--links" in sys.argv:
    def check(url):
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        try:
            with urllib.request.urlopen(req, timeout=15) as r:
                return url, r.status
        except urllib.error.HTTPError as e:
            return url, e.code
        except Exception as e:
            return url, type(e).__name__

    print(f"Checking {len(by_url)} links...")
    with ThreadPoolExecutor(max_workers=8) as pool:
        for url, status in pool.map(check, by_url):
            if status != 200:
                problems.append(f"Link returned {status}: {url}  ({by_url[url][0]})")

if problems:
    print(f"\n{len(problems)} problem(s):")
    for p in problems:
        print(" -", p)
    sys.exit(1)
print("No problems found.")
