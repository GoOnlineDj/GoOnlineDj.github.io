// const appleMusic = document.querySelector("apple-music-container");

// appleMusic.addEventListener("load", function () {
//   alert("Apple Music is loaded");
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const iframes = document.querySelectorAll("iframe[data-src]");
//   let currentIndex = 0;

//   function loadIframes() {
//     const batchSize = 1;
//     for (
//       let i = currentIndex;
//       i < currentIndex + batchSize && i < iframes.length;
//       i++
//     ) {
//       const iframe = iframes[i];
//       iframe.src = iframe.getAttribute("data-src");
//     }
//     currentIndex += batchSize;
//   }

//   // Load iframes every ? seconds
//   setInterval(() => {
//     if (currentIndex < iframes.length) {
//       loadIframes();
//     }
//   }, 500);

//   // Initial load
//   loadIframes();
// });








// Every track switch reloads the page, so the clock must paint immediately
// on load (not after the first 1s tick) or it vanishes for a second.
function updateClock() {
    document.getElementById("_id_Good-News").textContent = new Date().toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);




const defaultUrl = appleMusic[0].songs[0].src;
let iframe;
const Appleiframe = document.getElementById("_id_iframe");

let currentUrl = defaultUrl;
let a = 0;
let s = 0;
let autoLoadInterval;
let autoCycling = true;
let firstPress = 1;

// Stops the startup preview cycle once the user takes control
function stopAutoCycle() {
    autoCycling = false;
    clearTimeout(autoLoadInterval);
    discardPreload();
}

// Builds the URL used to switch tracks, carrying along the state needed to
// resume correctly once the page comes back (see the bootstrap deep link at
// the bottom of this file).
function buildTrackUrl(src) {
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("iframeSrc", src);
    url.searchParams.set("a", a);
    url.searchParams.set("s", s);
    url.searchParams.set("ai", currentArtistIndex);
    url.searchParams.set("si", currentSongIndex);
    if (autoCycling) url.searchParams.set("cycle", "1");
    return url;
}

// Switches to a new track. Every embed load spins up a fresh MusicKit
// instance/video decoder, and removing an iframe doesn't always fully
// release the browser's hardware decoder pool right away - after enough
// sequential loads in one tab (confirmed happening after as few as ~10),
// the decoder pool gets exhausted and even a previously-fine video starts
// freezing. A full same-origin navigation reliably clears that, so every
// track switch - manual or auto-cycle - reloads the page instead of
// swapping in another iframe, then restores the requested video via the
// ?iframeSrc= deep link below. `@view-transition { navigation: auto; }` in
// Apple+Music.css cross-fades this navigation so it doesn't flash like a
// hard reload.
// (Aborted-transition rejections are swallowed by an inline script in
// index.html's <head>, which must run before first render.)

const REVEAL_DELAY_MS = 700;   // wait after the embed loads so its artwork can arrive
const IFRAME_STALL_MS = 10000; // retry an embed that hasn't loaded after this long

function loadAppleMusic(src) {
    cancelAdvance();
    clearTimeout(autoLoadInterval);
    currentUrl = src;
    window.location.replace(buildTrackUrl(src).href);
}

// Builds the iframe for the track this page load was handed. Runs exactly
// once per page load (from the bootstrap deep link at the bottom of this
// file) - loadAppleMusic() above handles every later switch via navigation.
function renderIframe(src, attempt = 0) {
    currentUrl = src;
    updateCrownTooltip(src);
    const nextIframe = buildPlayer(src);
    // Apple's embed sometimes stalls and never fires "load". Rebuild it (fresh
    // session id) up to twice instead of leaving a blank player.
    const stallTimer = setTimeout(() => {
        if (iframe !== nextIframe) return;
        if (attempt >= 2) { nextIframe.classList.add("ready"); return; } // out of retries: show whatever we have
        nextIframe.remove();
        renderIframe(src, attempt + 1);
    }, IFRAME_STALL_MS);
    nextIframe.addEventListener("load", () => {
        clearTimeout(stallTimer);
        // A page can't see inside Apple's cross-origin player, so "loaded" plus a
        // short grace period is the closest signal that the artwork is ready.
        setTimeout(() => nextIframe.classList.add("ready"), REVEAL_DELAY_MS);
        clearTimeout(autoLoadInterval); // the LOAD_TIMEOUT fallback is no longer needed
        // Don't cycle (or preload the next video) until this one's artwork is
        // confirmed loadable - see startCycleWhenArtworkReady().
        if (autoCycling) startCycleWhenArtworkReady(src);
        cancelAdvance();
        reclaimFocus();
    });
    iframe = nextIframe;
    Appleiframe.appendChild(iframe);
    scheduleNextCycle(LOAD_TIMEOUT);
}

// Creates one Apple Music player iframe (not yet attached) for a track.
function buildPlayer(src) {
    const playerUrl = new URL(src);
    playerUrl.searchParams.set("_playerSession", `${Date.now()}`);
    const player = document.createElement("iframe");
    player.className = "random-iframe fade-in"; // fade-in: hidden until .ready (see Apple+Music.css)
    // Apple's own embed snippet requires the "*" wildcard on cross-origin allow
    // directives and allow-storage-access-by-user-activation in the sandbox;
    // without them the player can't reach its signed-in/accelerated playback
    // path and silently falls back to a path where audio and video drift apart.
    // "fullscreen *" in allow already grants fullscreen; allowFullscreen would
    // just trigger a console warning that it's being overridden.
    player.allow = "autoplay *; encrypted-media *; fullscreen *; clipboard-write";
    player.width = "100%";
    player.height = "100%";
    player.referrerPolicy = "strict-origin";
    player.sandbox = "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation";
    player.frameBorder = 0;
    player.title = "Apple Music";
    player.name = "Apple Music";
    player.src = playerUrl.href;
    return player;
}



// Next/back (and the end-of-song auto-advance) follow the same
// birthday-sorted order as the startup cycle, from wherever we are now.
async function AppleMusicForward() {
    const songs = sortedAppleMusic[currentArtistIndex].songs;
    if (currentSongIndex + 1 < songs.length) {
        currentSongIndex++;
    } else {
        currentArtistIndex = (currentArtistIndex + 1) % sortedAppleMusic.length;
        currentSongIndex = 0;
    }
    updateIframeSrc();
}

async function AppleMusicBack() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentArtistIndex = (currentArtistIndex - 1 + sortedAppleMusic.length) % sortedAppleMusic.length;
        currentSongIndex = sortedAppleMusic[currentArtistIndex].songs.length - 1;
    }
    updateIframeSrc();
}



// Every click reloads the page (see loadAppleMusic), so the lit state is
// remembered in sessionStorage and re-applied on the next load for whatever
// is left of LIT_MS.
const LIT_MS = 1000;

function lightButtons(cls, ms) {
    const btns = document.querySelectorAll("." + cls);
    btns.forEach(b => b.classList.add("lit"));
    setTimeout(() => btns.forEach(b => b.classList.remove("lit")), ms);
}

function flashButton(btn) {
    const cls = btn.classList.contains("_c_Apple-Music-forward")
        ? "_c_Apple-Music-forward" : "_c_Apple-Music-back";
    try { sessionStorage.setItem("litButton", JSON.stringify({ cls, at: Date.now() })); } catch (e) {}
    lightButtons(cls, LIT_MS);
}

try {
    const lit = JSON.parse(sessionStorage.getItem("litButton"));
    sessionStorage.removeItem("litButton");
    const left = lit ? LIT_MS - (Date.now() - lit.at) : 0;
    if (left > 0) lightButtons(lit.cls, left);
} catch (e) {}

// Letter/number buttons flash green the same way (matched by their text)
function litKeys(key, ms) {
    const btns = [...document.querySelectorAll("button")].filter(b => b.innerText.trim() === key && /_c_Apple-Music-Video-[A-Z0-9]\b/.test(b.className));
    btns.forEach(b => b.classList.add("lit-green"));
    setTimeout(() => btns.forEach(b => b.classList.remove("lit-green")), ms);
}

function flashKey(key) {
    try { sessionStorage.setItem("litKey", JSON.stringify({ key, at: Date.now() })); } catch (e) {}
    litKeys(key, LIT_MS);
}

try {
    const litK = JSON.parse(sessionStorage.getItem("litKey"));
    sessionStorage.removeItem("litKey");
    const leftK = litK ? LIT_MS - (Date.now() - litK.at) : 0;
    if (leftK > 0) litKeys(litK.key, leftK);
} catch (e) {}

const musicForward = document.querySelectorAll("._c_Apple-Music-forward");
musicForward.forEach(x => x.addEventListener("click", () => {
    flashButton(x);
    stopAutoCycle();

    if (firstPress === 1) {
        loadAppleMusic(appleMusic[a].songs[s].src);
        firstPress = 0;
    } else {
        AppleMusicForward();
    }
}));

const musicRefresh = document.querySelectorAll("._c_Apple-Music-refresh");
musicRefresh.forEach(x => x.addEventListener("click", () => {
    stopAutoCycle();
    loadAppleMusic(currentUrl);
    firstPress = 0;
}));

const FINDtxt = document.querySelectorAll("._c_FINDtxt");
FINDtxt.forEach(x => x.addEventListener("click", () => {
    stopAutoCycle();
    window.location.href = "../FINDtxt/FINDtxt.html";
}));

const musicBack = document.querySelectorAll("._c_Apple-Music-back");
musicBack.forEach(x => x.addEventListener("click", () => {
    flashButton(x);
    stopAutoCycle();

    if (firstPress === 1) {
        loadAppleMusic(appleMusic[a].songs[s].src);
        firstPress = 0;
    } else {
        AppleMusicBack();
    }
}));






function buttonClick(value) {

    const alphabet_number = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    firstPress = 0;

    if (!alphabet_number.includes(value)) {
        return;
    }

    
    if (isNaN(value)) {
        // this is not a number
        handleLetter(value);
    }
    else {
        // this is a number
        handleNumber(value);

    }   

}





// Only move to the artist if one exists, so a letter with no artists
// can't leave `a` at -1 and break the forward/back buttons
function handleLetter(value) {
    // case-insensitive, so artists starting with a lowercase letter match too
    const newA = appleMusic.findIndex((item) => item.artist.toUpperCase().startsWith(value.toUpperCase()));
    if (newA !== -1) {
        a = newA;
        s = 0;
        // keep the sorted position in sync so next/back continue from here
        currentArtistIndex = sortedAppleMusic.indexOf(appleMusic[a]);
        currentSongIndex = 0;
        stopAutoCycle();
        loadAppleMusic(appleMusic[a].songs[s].src);
    }
}

function handleNumber(value) {
    handleLetter(value);
}



function valueInit() {
    document.querySelector("._c_Apple-Music-grid").addEventListener("click", function (event) {
        let value = event.target.innerText;
        if (event.target.tagName === "BUTTON" && /^[A-Z0-9]$/.test((value || "").trim())) flashKey(value.trim());
        buttonClick(value);

        
    });
}

valueInit();










////////////////////////////////////////////////////////////////////////////////



///////////////////////

let currentArtistIndex = 0;
let currentSongIndex = 0;

function createDateFromBirthday(birthday) {
    if (!birthday || !birthday.month || !birthday.day || !birthday.year) return null;
    return new Date(birthday.year, new Date(`${birthday.month} 1`).getMonth(), birthday.day);
}

function sortArtistsByUpcomingBirthday(artists) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to the start of the day

    // An artist can have several birthdays (e.g. a duo). Each one gets its own
    // slot at its own upcoming date, so New Boyz (Oct 12 + Oct 13) is listed
    // on both days, not just by whichever birthday happens to be first.
    const entries = [];
    const undated = [];

    artists.forEach((artist, index) => {
        let added = false;
        const seen = new Set(); // same date listed twice (e.g. Nina Sky) = one slot
        (artist.birthday || []).forEach(birthday => {
            const date = createDateFromBirthday(birthday);
            if (!date) return;
            const next = new Date(today.getFullYear(), date.getMonth(), date.getDate());
            if (next < today) next.setFullYear(today.getFullYear() + 1);
            if (seen.has(next.getTime())) return;
            seen.add(next.getTime());
            entries.push({ artist, next, index, birthday });
            added = true;
        });
        if (!added) undated.push(artist);
    });

    entries.sort((a, b) => (a.next - b.next) || (a.index - b.index));

    // slotBirthdays[i] is the birthday that put sorted[i] in its slot
    const sorted = entries.map(entry => entry.artist).concat(undated);
    const slotBirthdays = entries.map(entry => entry.birthday);
    return { sorted, slotBirthdays };
}

const { sorted: sortedAppleMusic, slotBirthdays: sortedBirthdays } = sortArtistsByUpcomingBirthday(appleMusic);

// Log each slot with only the birthday that placed it there, so New Boyz
// shows Oct 12 in its Oct 12 slot and Oct 13 in its Oct 13 slot
sortedAppleMusic.forEach((artist, i) => {
    const birthday = sortedBirthdays[i];
    if (birthday) {
        console.log(`Artist: ${artist.artist}, Birthday: ${birthday.month} ${birthday.day}, ${birthday.year}`);
    } else {
        console.log(`Artist: ${artist.artist}, Birthday: Not available`);
    }
});


///////////////////////////////////////

// 👑 tooltip: hovering the crown shows the birthday of the artist whose video
// is on screen (styled in Apple+Music.css via the data-tooltip attribute).
// The crown's link itself is unchanged.
function updateCrownTooltip(src) {
    const crown = document.querySelector("._c_CROWN");
    if (!crown) return;
    // Trust the restored artist index only if that artist really owns this
    // video; a bare ?iframeSrc= link has no index, so look the artist up.
    let artist = sortedAppleMusic[currentArtistIndex];
    if (!artist || !artist.songs.some(song => song.src === src)) {
        artist = sortedAppleMusic.find(ar => ar.songs.some(song => song.src === src));
    }
    // No birthday listed: no data-tooltip, so nothing shows on hover
    if (!artist || !artist.birthday || artist.birthday.length === 0) {
        crown.removeAttribute("data-tooltip");
        return;
    }
    const birthdays = artist.birthday
        .map(b => `${b.month} ${b.day}, ${b.year}`)
        .join("  •  ");
    crown.setAttribute("data-tooltip", `${artist.artist}\n🎂 ${birthdays}`);
}

function updateIframeSrc() {
    const artist = sortedAppleMusic[currentArtistIndex];
    const song = artist.songs[currentSongIndex];
    // a/s must be set before loadAppleMusic() runs: it reads them
    // synchronously to build the reload URL.
    a = appleMusic.indexOf(artist);
    s = artist.songs.indexOf(song);
    loadAppleMusic(song.src);
}


// Cycle through artists and songs, but only after the current embed has
// finished loading. A fixed 3s setInterval stacked up embed reloads faster
// than they could load, which froze the page.
const CYCLE_DELAY = 5000;
const PREFETCH_AT = 2000; // this far into each video, start fetching the next one in the background
const LOAD_TIMEOUT = 15000; // move on if an embed never finishes loading

function scheduleNextCycle(delay) {
    clearTimeout(autoLoadInterval);
    if (autoCycling) autoLoadInterval = setTimeout(cycleThroughArtists, delay);
}

// Which track the cycle will show next, as sorted indices (same order the
// cycle has always used).
function peekNextTrack() {
    let artistIndex = currentArtistIndex;
    let songIndex = (currentSongIndex + 1) % sortedAppleMusic[artistIndex].songs.length;
    if (songIndex === 0) artistIndex = (artistIndex + 1) % sortedAppleMusic.length;
    return { artistIndex, songIndex, src: sortedAppleMusic[artistIndex].songs[songIndex].src };
}

// Preview cycle only: PREFETCH_AT ms into each video, the next one is built
// in a hidden iframe stacked behind the visible one. When the cycle fires it
// is swapped in already loaded - no page reload, no blank frame. Any manual
// control still reloads the page as before.
//
// Reload limit (disabled): a page reload every MAX_SWAPS swaps would clear the
// browser's video-decoder pool (see the note above loadAppleMusic). Swapping
// has not shown the freeze so far, so it is off. If videos start freezing
// after many swaps, re-enable it by uncommenting the two MAX_SWAPS lines here
// and in preloadNext() (preview swaps and auto-next swaps count together).
// const MAX_SWAPS = 10;
// The iframe "load" event fires before Apple's player has fetched its poster
// image, and a page can't see inside the player, so a preloaded frame only
// counts as ready this long after it loaded.
const ARTWORK_GRACE_MS = 1500;
// Preview cycle: if the next frame is still loading when the cycle fires, wait
// up to this long for it rather than falling back to a page reload.
const PRELOAD_MAX_WAIT_MS = 8000;
let swapsSinceReload = 0;
let preloadTimer;
let preloaded = null; // { track, frame, startedAt, loadedAt, artworkOk }

// Artwork check. Apple's player fetches its poster image from Apple's artwork
// CDN (mzstatic); when that CDN is slow or failing, the player shows no image.
// The page can't see inside the player, but it can load the same artwork
// itself (the URL comes from the Apple lookup the auto-next timer already
// uses), which is a direct test that the image is available right now.
const ARTWORK_LOAD_TIMEOUT_MS = 8000;  // one image attempt
const ARTWORK_RETRY_MS = 3000;         // pause between attempts
const ARTWORK_MAX_WAIT_MS = 60000;     // arrival gate: give up and cycle anyway

async function getArtworkUrl(src) {
    const track = await lookupTrack(src);
    const art = track && track.artworkUrl100;
    return art ? art.replace(/\d+x\d+bb/, "600x600bb") : null;
}

function loadImage(url, ms) {
    return new Promise(resolve => {
        const img = new Image();
        const timer = setTimeout(() => { img.src = ""; resolve(false); }, ms);
        img.onload = () => { clearTimeout(timer); resolve(true); };
        img.onerror = () => { clearTimeout(timer); resolve(false); };
        img.src = url;
    });
}

// One attempt: true when the video's artwork loads, false when the image
// fails, null when the lookup itself failed (nothing to check against).
async function artworkLoads(src) {
    const url = await getArtworkUrl(src);
    return url ? loadImage(url, ARTWORK_LOAD_TIMEOUT_MS) : null;
}

// Arrival gate: the preview cycle doesn't start until the first video's
// artwork is confirmed, retrying until it is (or ARTWORK_MAX_WAIT_MS passes,
// then it cycles anyway rather than sitting on one video forever).
async function startCycleWhenArtworkReady(src) {
    const activeIframe = iframe;
    const started = Date.now();
    let ok = false;
    while (!ok && Date.now() - started < ARTWORK_MAX_WAIT_MS) {
        const result = await artworkLoads(src);
        if (!autoCycling || iframe !== activeIframe) return;
        // null: the lookup failed, so there is nothing to verify against - move
        // on rather than hold the page on one video for nothing.
        ok = result !== false;
        if (!ok) await new Promise(resolve => setTimeout(resolve, ARTWORK_RETRY_MS));
    }
    if (!autoCycling || iframe !== activeIframe) return;
    scheduleNextCycle(CYCLE_DELAY);
    preloadTimer = setTimeout(preloadNext, PREFETCH_AT);
}

function preloadIsReady() {
    return !!(preloaded && preloaded.loadedAt && preloaded.artworkOk
        && Date.now() - preloaded.loadedAt >= ARTWORK_GRACE_MS);
}

function discardPreload() {
    clearTimeout(preloadTimer);
    if (preloaded) preloaded.frame.remove();
    preloaded = null;
}

// Also called when the end-of-video countdown starts, so "auto next" has a
// loaded frame waiting too (that is outside the preview cycle).
function preloadNext() {
    if (document.hidden) return;
    // if (swapsSinceReload >= MAX_SWAPS) return; // reload limit, see MAX_SWAPS above
    if (preloaded) return; // already loading/loaded
    discardPreload();
    const track = peekNextTrack();
    const frame = buildPlayer(track.src);
    frame.classList.add("preload");
    frame.setAttribute("aria-hidden", "true");
    frame.tabIndex = -1;
    const entry = { track, frame, startedAt: Date.now(), loadedAt: 0, artworkOk: false };
    frame.addEventListener("load", () => { entry.loadedAt = Date.now(); });
    artworkLoads(track.src).then(result => { entry.artworkOk = result !== false; });
    preloaded = entry;
    Appleiframe.appendChild(frame);
}

function swapInPreloaded() {
    const { track, frame } = preloaded;
    preloaded = null;
    const artist = sortedAppleMusic[track.artistIndex];
    const song = artist.songs[track.songIndex];
    currentArtistIndex = track.artistIndex;
    currentSongIndex = track.songIndex;
    a = appleMusic.indexOf(artist);
    s = artist.songs.indexOf(song);
    currentUrl = song.src;
    updateCrownTooltip(song.src);
    swapsSinceReload++;
    firstPress = 0; // we have moved past the first video: arrows go next/back from here

    const old = iframe;
    frame.classList.remove("preload");
    frame.removeAttribute("aria-hidden");
    frame.removeAttribute("tabindex");
    iframe = frame;
    frame.classList.add("ready");
    if (old) old.remove();

    cancelAdvance();
    if (autoCycling) {
        scheduleNextCycle(CYCLE_DELAY);
        preloadTimer = setTimeout(preloadNext, PREFETCH_AT);
    }
}

// End-of-video auto next: use the preloaded frame if it is ready, else reload.
function autoAdvance() {
    // Had PRELOAD_BEFORE_END_MS to load; the grace period is covered too.
    if (preloaded && preloaded.loadedAt) {
        swapInPreloaded();
        return;
    }
    AppleMusicForward();
}

function cycleThroughArtists() {
    if (!autoCycling) return;
    // Don't load embeds in a background tab
    if (document.hidden) {
        scheduleNextCycle(CYCLE_DELAY);
        return;
    }
    if (preloaded) {
        const waited = Date.now() - preloaded.startedAt;
        // Next video loaded in the background with its artwork confirmed: swap
        // it in. Past the wait limit a loaded frame is swapped in even without
        // the artwork check, since a page reload would show no image either.
        if (preloadIsReady() || (preloaded.loadedAt && waited >= PRELOAD_MAX_WAIT_MS)) {
            swapInPreloaded();
            return;
        }
        // Still loading, or its artwork is still being checked: give it a
        // little longer before giving up and reloading the page.
        if (waited < PRELOAD_MAX_WAIT_MS) {
            scheduleNextCycle(250);
            return;
        }
    }
    discardPreload();
    currentSongIndex = (currentSongIndex + 1) % sortedAppleMusic[currentArtistIndex].songs.length;
    if (currentSongIndex === 0) {
        currentArtistIndex = (currentArtistIndex + 1) % sortedAppleMusic.length;
    }
    // Not preloaded (or time for a clean slate): updateIframeSrc() ->
    // loadAppleMusic() reloads the page for this track.
    updateIframeSrc();
}

//////////////////////////////////////////////////



//////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Auto-advance: after a video plays to the end, load the next one.
//
// The Apple Music embed doesn't tell this page when a video ends (it sends no
// postMessage events, and a page can't see a cross-origin iframe's network
// traffic), so we look up the video's length from Apple's public lookup API and
// start a timer when the user presses play. Every click on the video restarts
// the timer, so it errs on the late side. The timer counts wall-clock time, so
// loading, buffering and pauses are covered by a generous end buffer plus a
// countdown notice with a "Keep playing" button before anything is skipped.

// true  = wait the full video length (viewers signed in to Apple Music)
// false = move on after the ~30s preview non-subscribers get
const PLAY_FULL_LENGTH = true;
const PREVIEW_MS = 30000;
const END_BUFFER_MS = 10000; // slack for loading/buffering
const COUNTDOWN_MS = 10000;    // notice shown this long before skipping
const KEEP_PLAYING_MS = 60000; // "Keep playing" pushes the skip back this much

const lookupCache = new Map(); // video id -> Apple lookup result (successes only)
let advanceTimer;
let preloadBeforeEndTimer;

function videoIdOf(src) {
    const match = src.match(/\/(\d+)(?:[?#]|$)/);
    return match ? match[1] : null;
}

// One Apple lookup per video, shared by the auto-next timer (duration) and
// the artwork check. Failures aren't cached, so a later retry can succeed.
//
// Apple's lookup API sends no Access-Control-Allow-Origin header for ordinary
// sites (only localhost), so fetch() is blocked by CORS on the live site. The
// API's JSONP form (&callback=) loads as a <script> instead, which CORS does
// not apply to. The script comes from itunes.apple.com only.
const LOOKUP_TIMEOUT_MS = 10000;
let lookupSeq = 0;

function lookupJsonp(id) {
    return new Promise(resolve => {
        const cb = `gdjLookup${Date.now()}_${lookupSeq++}`;
        const script = document.createElement("script");
        const done = data => {
            clearTimeout(timer);
            delete window[cb];
            script.remove();
            resolve(data);
        };
        const timer = setTimeout(() => done(null), LOOKUP_TIMEOUT_MS);
        window[cb] = done;
        script.onerror = () => done(null);
        script.src = `https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}&country=us&callback=${cb}`;
        document.head.appendChild(script);
    });
}

async function lookupTrack(src) {
    const id = videoIdOf(src);
    if (!id) return null;
    if (lookupCache.has(id)) return lookupCache.get(id);
    const data = await lookupJsonp(id);
    const track = (data && data.results && data.results[0]) || null;
    if (track) lookupCache.set(id, track);
    return track;
}

async function getDurationMs(src) {
    const track = await lookupTrack(src);
    return (track && track.trackTimeMillis) || null; // null: just don't auto-advance this one
}

// Countdown notice: "Next video in 10s · Keep playing"
let countdownTicker;
const advanceNotice = document.createElement("div");
advanceNotice.setAttribute("role", "status");
advanceNotice.style.cssText = "position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9999;display:none;align-items:center;gap:12px;padding:8px 14px;border-radius:999px;background:rgba(0,0,0,.8);color:#fff;font:14px system-ui,sans-serif;";
const advanceNoticeText = document.createElement("span");
const keepPlayingBtn = document.createElement("button");
keepPlayingBtn.type = "button";
keepPlayingBtn.textContent = "Keep playing";
keepPlayingBtn.style.cssText = "border:0;border-radius:999px;padding:4px 10px;background:#fa243c;color:#fff;font:inherit;cursor:pointer;";
advanceNotice.append(advanceNoticeText, keepPlayingBtn);
document.body.appendChild(advanceNotice);

function cancelAdvance() {
    clearTimeout(advanceTimer);
    clearTimeout(preloadBeforeEndTimer);
    clearInterval(countdownTicker);
    advanceNotice.style.display = "none";
}

// Start loading the next video this long before the current one ends, so its
// player and poster image have time to arrive (Apple can be slow with those).
const PRELOAD_BEFORE_END_MS = 30000;

function scheduleAdvance(ms) {
    cancelAdvance();
    advanceTimer = setTimeout(startCountdown, Math.max(0, ms - COUNTDOWN_MS));
    clearTimeout(preloadBeforeEndTimer);
    preloadBeforeEndTimer = setTimeout(preloadNext, Math.max(0, ms - PRELOAD_BEFORE_END_MS));
}

function startCountdown() {
    preloadNext(); // no-op if the 30s-before-end preload already started
    let remaining = Math.round(COUNTDOWN_MS / 1000);
    const tick = () => {
        if (remaining <= 0) {
            cancelAdvance();
            autoAdvance();
            return;
        }
        advanceNoticeText.textContent = `Next video in ${remaining}s`;
        remaining--;
    };
    advanceNotice.style.display = "flex";
    tick();
    countdownTicker = setInterval(tick, 1000);
}

keepPlayingBtn.addEventListener("click", () => scheduleAdvance(KEEP_PLAYING_MS));

async function startAdvanceTimer() {
    cancelAdvance();
    const activeIframe = iframe;
    const src = currentUrl;
    const fullMs = await getDurationMs(src);
    if (iframe !== activeIframe) return;
    const ms = PLAY_FULL_LENGTH ? fullMs : Math.min(fullMs || PREVIEW_MS, PREVIEW_MS);
    if (!ms) return;
    scheduleAdvance(ms + END_BUFFER_MS);
}

// Leaving fullscreen: take focus back so the next click (e.g. pause/play) on
// the video is detected again and restarts the timer
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) setTimeout(reclaimFocus, 0);
});

// Invisible element the page focuses so the NEXT click on the video can be
// detected too (a click into the iframe only shows up as the page losing focus)
const focusCatcher = document.createElement("button");
focusCatcher.type = "button";
focusCatcher.tabIndex = -1;
// Not aria-hidden: this element is intentionally focused, and browsers block/warn
// on aria-hidden elements that retain focus.
focusCatcher.style.cssText = "position:fixed;left:-9999px;width:1px;height:1px;opacity:0;";
document.body.appendChild(focusCatcher);

function reclaimFocus() {
    if (document.activeElement === iframe && !document.fullscreenElement) {
        focusCatcher.focus({ preventScroll: true });
    }
}

// Acknowledge a click on the player: both arrows flash red, white, blue (0.5s
// each) twice - see the play-ack animation in Apple+Music.css. A click during
// the flash restarts it.
function flashPlayAck() {
    const arrows = document.querySelectorAll("._c_Apple-Music-forward, ._c_Apple-Music-back");
    arrows.forEach(btn => {
        btn.classList.remove("play-ack");
        void btn.offsetWidth; // restart the animation if it is already running
        btn.classList.add("play-ack");
        btn.addEventListener("animationend", () => btn.classList.remove("play-ack"), { once: true });
    });
}

// Click on the video: acknowledge it and (re)start the auto-advance timer.
// While the preview cycle is running, clicks on the player are ignored: the
// cycle keeps going until an arrow stops it, and only then is a click on
// play acknowledged with the arrow flash.
window.addEventListener("blur", () => {
    setTimeout(() => {
        if (document.activeElement !== iframe) return;
        if (autoCycling) return;
        flashPlayAck();
        startAdvanceTimer();
        setTimeout(reclaimFocus, 1000);
    }, 0);
});

// Optional deep link: index.html?iframeSrc=<Apple Music embed URL>
// Only Apple Music embeds are accepted so the link can't load other pages.
// a/s/ai/si/cycle restore the browsing position and whether the startup
// preview cycle should keep going, since every track switch now arrives
// here via a full navigation (see loadAppleMusic() above) instead of an
// in-page iframe swap.
const bootParams = new URLSearchParams(window.location.search);
const linkedSrc = bootParams.get("iframeSrc");
if (linkedSrc && linkedSrc.startsWith("https://embed.music.apple.com/")) {
    const pa = parseInt(bootParams.get("a"), 10);
    const ps = parseInt(bootParams.get("s"), 10);
    const pai = parseInt(bootParams.get("ai"), 10);
    const psi = parseInt(bootParams.get("si"), 10);
    // Only accept indexes that point at a real artist/song, so a crafted or
    // stale link can't leave the forward/back code reading past the lists.
    const inRange = (n, len) => Number.isInteger(n) && n >= 0 && n < len;
    if (inRange(pa, appleMusic.length)) {
        a = pa;
        if (inRange(ps, appleMusic[a].songs.length)) s = ps;
    }
    if (inRange(pai, sortedAppleMusic.length)) {
        currentArtistIndex = pai;
        if (inRange(psi, sortedAppleMusic[pai].songs.length)) currentSongIndex = psi;
    }
    firstPress = 0;
    autoCycling = bootParams.get("cycle") === "1";
    renderIframe(linkedSrc);
    // The state is loaded; show the clean address instead of the long one.
    // (Track switches still build their own full URL in buildTrackUrl().)
    try {
        history.replaceState(null, "", window.location.pathname + window.location.hash);
    } catch (e) { /* address bar just keeps the long URL */ }
} else {
    // Fresh visit, no deep link yet: render the first preview track directly
    // instead of going through loadAppleMusic(), which would otherwise
    // immediately reload the page before anything had a chance to show.
    const artist = sortedAppleMusic[currentArtistIndex];
    const song = artist.songs[currentSongIndex];
    a = appleMusic.indexOf(artist);
    s = artist.songs.indexOf(song);
    renderIframe(song.src);
}


//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE