function showClock() {
    document.getElementById("_id_Good-News").textContent = new Date().toLocaleTimeString();
}
showClock(); // show the time right away instead of after the first second
setInterval(showClock, 1000);


const id_frame = document.getElementById("_id_frame");





// appleMusic data comes from ../Apple+Music/AppleMusicVideos.js (loaded in FINDtxt.html)

/////////////////////////////////////


function attachEventListeners() {
    const FINDtxt = document.querySelectorAll("._c_Apple-Music-Video-refresh");
    FINDtxt.forEach(x => x.addEventListener("click", () => {
        // Reload to reset the list, then focus the search bar once the page is back
        try { sessionStorage.setItem('_focusSearch', '1'); } catch (e) {}
        location.reload();
    }));
}

// The refresh buttons are static, so attach once. (A MutationObserver used to
// re-attach on every list change, stacking duplicate listeners forever.)
attachEventListeners();


/////////////////////////////////////




// Keep the list ordered by artist name: names starting with "$" come first,
// then names starting with any other special character, then A-Z / 0-9
// (ignores case and accents; "Usher &" and "Usher ," sort together)
const artistCollator = new Intl.Collator('en', { sensitivity: 'base', ignorePunctuation: true, numeric: true });
const artistRank = (name) => {
    const first = name.trimStart().charAt(0);
    if (first === '$') return 0;
    return /[\p{L}\p{N}]/u.test(first) ? 2 : 1;
};
appleMusic.sort((a, b) =>
    artistRank(a.artist) - artistRank(b.artist) ||
    artistCollator.compare(a.artist, b.artist));

// The search bar lives in #_id_frame; every list is drawn into #_id_results
const id_results = document.getElementById('_id_results');
const searchInput = document.getElementById('_id_search-input');
const searchClear = document.getElementById('_id_search-clear');
const searchCount = document.getElementById('_id_search-count');

function setSearchCount(text) {
    searchCount.textContent = text;
}

const MAX_SONGS_PER_ARTIST = 5;

// Make a clickable row work from the keyboard too: focusable, announced as a
// button, and activated by Enter or Space as well as by a click.
function makeActivatable(el, handler) {
    el.setAttribute('role', 'button');
    el.tabIndex = 0;
    el.addEventListener('click', handler);
    el.addEventListener('keydown', (event) => {
        if (event.target !== el) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handler();
        }
    });
}

// Hidden text read by screen readers after a row's visible text
function appendScreenReaderText(el, text) {
    const span = document.createElement('span');
    span.className = '_c_sr-only';
    span.textContent = ' ' + text;
    el.appendChild(span);
}

// Draw a list of artists. `hits` (optional) maps an artist to its search hit:
// the [start, end) ranges of its name to highlight and the matching songs,
// which are listed under the artist.
function renderArtists(artists, emptyMessage, hits) {
    id_results.textContent = '';
    if (artists.length === 0) {
        const empty = document.createElement("h2");
        empty.textContent = emptyMessage || 'not found';
        id_results.appendChild(empty);
        return;
    }
    const fragment = document.createDocumentFragment();
    artists.forEach(artist => {
        const artistElement = document.createElement('p');
        const hit = hits && hits.get(artist);
        appendHighlighted(artistElement, artist.artist, hit && hit.ranges);
        makeActivatable(artistElement, () => listArtistSongs(artist.songs, artist.artist));
        fragment.appendChild(artistElement);

        if (hit && hit.songs.length > 0) {
            hit.songs.slice(0, MAX_SONGS_PER_ARTIST).forEach(({ song, ranges }) => {
                const songElement = document.createElement('p');
                songElement.className = '_c_search-song';
                songElement.appendChild(document.createTextNode('♪ '));
                appendHighlighted(songElement, song.title, ranges);
                appendScreenReaderText(songElement, 'by ' + artist.artist + ', opens video in a new tab');
                makeActivatable(songElement, () => goToArtistSongPage(song.src));
                fragment.appendChild(songElement);
            });
            const extra = hit.songs.length - MAX_SONGS_PER_ARTIST;
            if (extra > 0) {
                const more = document.createElement('p');
                more.className = '_c_search-song _c_search-more';
                more.textContent = `+ ${extra} more by ${artist.artist}`;
                makeActivatable(more, () => listArtistSongs(artist.songs, artist.artist));
                fragment.appendChild(more);
            }
        }
    });
    id_results.appendChild(fragment);
}

function appendHighlighted(el, text, ranges) {
    if (!ranges || ranges.length === 0) {
        el.textContent = text;
        return;
    }
    let pos = 0;
    ranges.forEach(([start, end]) => {
        if (start > pos) el.appendChild(document.createTextNode(text.slice(pos, start)));
        const mark = document.createElement('mark');
        mark.textContent = text.slice(start, end);
        el.appendChild(mark);
        pos = end;
    });
    if (pos < text.length) el.appendChild(document.createTextNode(text.slice(pos)));
}

//Function to log all artist names from appleMusic array
function logArtistNames(appleMusic) {
    setSearchCount('');
    renderArtists(appleMusic);
}

// Function to list all songs of an artist
///add event listener to each song element
function listArtistSongs(songs, artistName) {
    const id_frame = id_results;
    id_frame.innerHTML = ''; // Clear previous content
    document.getElementById('_id_frame').scrollTop = 0;
    songs.forEach(song => { // List all songs
        const songElement = document.createElement('p');
        songElement.textContent = song.title;
        appendScreenReaderText(songElement, 'opens video in a new tab');
        // Call goToArtistSongPage when song is clicked
        makeActivatable(songElement, () => goToArtistSongPage(song.src));
        id_frame.appendChild(songElement);
    });
    // The clicked artist row was just replaced: announce the new list and move
    // keyboard focus to it so screen reader and keyboard users are not lost
    setSearchCount(artistName ? `${songs.length} ${songs.length === 1 ? 'song' : 'songs'} by ${artistName}` : '');
    id_frame.focus({ preventScroll: true });
}


// Function to take user to an artist on the index.html page to a specific artist and a specific song when song is clicked on 
// A page opened from a file (file://) reports its origin as the string "null",
// which postMessage rejects as a target, so fall back to "*" there. The message
// holds only an Apple Music link, and Video.js checks the sender and the link.
function messageTargetOrigin() {
    return window.location.protocol === 'file:' ? '*' : window.location.origin;
}

function goToArtistSongPage(src) {
    const newWindow = window.open("Video.html", "_blank");
    if (!newWindow) return; // popup blocked

    function handleReady(event) {
        if (event.source === newWindow && event.data && event.data.ready) {
            newWindow.postMessage({ src }, messageTargetOrigin());
            window.removeEventListener("message", handleReady);
        }
    }

    window.addEventListener("message", handleReady);
    // Don't keep listening if the new tab never reports ready
    setTimeout(() => window.removeEventListener("message", handleReady), 30000);
}



logArtistNames(appleMusic);



//////////////////////////////////////////////////////////////////

const scrollUpButtons = document.querySelectorAll('._c_Scroll-Up');
const scrollDownButtons = document.querySelectorAll('._c_Scroll-Down');

if (!id_frame) {
    console.error("id_frame element not found. Please check the selector or ensure the element exists in the DOM.");
}

let scrollInterval;
let holdScrolled = false;   // the current press has already scrolled the list
let holdEndedAt = -Infinity; // when the last scrolling hold ended (ms)
const HOLD_CLICK_WINDOW = 400; // a click this soon after a hold is the hold's own release

// True when this click is just the release of a hold that already scrolled
function isReleaseOfHold() {
    return performance.now() - holdEndedAt < HOLD_CLICK_WINDOW;
}

function startScrolling(direction) {
    if (id_frame) {
        clearInterval(scrollInterval);
        holdScrolled = false;
        scrollInterval = setInterval(() => {
            holdScrolled = true;
            id_frame.scrollBy({ top: direction === 'up' ? -500 : 500, behavior: 'smooth' }); // Faster scrolling for holding
        }, 500); // Faster interval for holding
    }
}

function stopScrolling() {
    clearInterval(scrollInterval);
    if (holdScrolled) {
        holdScrolled = false;
        holdEndedAt = performance.now();
    }
}

scrollUpButtons.forEach(button => {
    button.addEventListener('pointerdown', () => startScrolling('up'));
    button.addEventListener('pointerup', stopScrolling);
    button.addEventListener('pointercancel', stopScrolling);
    button.addEventListener('pointerleave', stopScrolling); // Stop scrolling if the mouse leaves the button
    button.addEventListener('click', () => {
        if (!isReleaseOfHold()) id_frame.scrollBy({ top: -300, behavior: 'smooth' }); // Slower scroll for clicking
    });
});

scrollDownButtons.forEach(button => {
    button.addEventListener('pointerdown', () => startScrolling('down'));
    button.addEventListener('pointerup', stopScrolling);
    button.addEventListener('pointercancel', stopScrolling);
    button.addEventListener('pointerleave', stopScrolling); // Stop scrolling if the mouse leaves the button
    button.addEventListener('click', () => {
        if (!isReleaseOfHold()) id_frame.scrollBy({ top: 300, behavior: 'smooth' }); // Slower scroll for clicking
    });
});



// setInterval(() => {
//     const currentSecond = new Date().getSeconds();
//     document.documentElement.style.setProperty('--current-second', currentSecond);
// }, 1000);


//////////////////////////////////////////////////////////////////




function buttonClick(value) {
    const alphabet_number = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

    if (!alphabet_number.includes(value)) {
        return;
    }

    if (isNaN(value)) {
        // this is not a number
        handleLetter(value);
    } else {
        // this is a number
        handleNumber(value);
    }
}

// A letter/number button replaces whatever is typed in the search bar
function showStartingWith(value) {
    searchInput.value = '';
    searchClear.hidden = true;
    // Upper or lower case first letters both count, and accents are ignored (Élan = E)
    const firstChar = (name) => name.trimStart().normalize('NFD').replace(/\p{M}/gu, '').toUpperCase();
    const artists = appleMusic.filter((item) => firstChar(item.artist).startsWith(value));
    setSearchCount(artists.length ? `${artists.length} starting with “${value}”` : '');
    renderArtists(artists);
    document.getElementById('_id_frame').scrollTop = 0;
}

function handleLetter(value) {
    showStartingWith(value);
}

function handleNumber(value) {
    showStartingWith(String(Number(value)));
}

///////////////////////////////////////////////////////////////////
// Live artist search

// Make text comparable so creative artist names are still found:
//  - lowercase, drop accents (Sisqó = sisqo), unfold stylized letters
//    (𝓐𝓢𝓐𝓟, ＡＢＣ, ™) and fold special letters (MØ = mo, Æ = ae, ß = ss)
//  - read look-alike symbols as letters ($ = s, ¢ = c, £ = l, ¥ = y, € = e,
//    @ = a, and ! = i between letters: A$AP = asap, P!nk = pink)
//  - treat spaces, & + × , as word breaks and drop plain punctuation (T-Pain = tpain)
//  - keep letters and numbers of any alphabet (Japanese, Korean, Cyrillic...)
//  - keep every other symbol as itself, so †, ♥, ★, ∆, #, %, emoji can be typed
// "Raw" mode (used only when a search is nothing but punctuation, like "." or
// "!!!") keeps every character except spaces, so any symbol can be searched.
// map[i] / ends[i] are the start / end index in the original text of
// normalized character i, so matches can be highlighted.
const LETTER_FOLDS = { 'ø': 'o', 'æ': 'ae', 'œ': 'oe', 'ß': 'ss', 'đ': 'd', 'ð': 'd', 'þ': 'th', 'ł': 'l', 'ı': 'i', 'ħ': 'h' };
const SYMBOL_LETTERS = { '$': 's', '¢': 'c', '£': 'l', '¥': 'y', '€': 'e', '@': 'a' };
const WORD_BREAKS = /[\s&+×,]/u;
const DROPPED_PUNCTUATION = /[\p{Pd}\p{Pi}\p{Pf}\p{Ps}\p{Pe}'"`.\-_\/\\:;?*·•​-‏﻿]/u;
const IS_ALNUM = /[\p{L}\p{N}]/u;
const IS_LETTER = /\p{L}/u;

function normalizeWithMap(text, raw = false) {
    let norm = '';
    const map = [];
    const ends = [];
    const chars = [];
    let at = 0;
    for (const original of text) {
        chars.push({
            start: at,
            end: at + original.length,
            folded: original.normalize(raw ? 'NFC' : 'NFKD').replace(raw ? /$^/u : /\p{M}/gu, '').toLowerCase()
        });
        at += original.length;
    }
    const isLetterAt = (i) => i >= 0 && i < chars.length && IS_LETTER.test(chars[i].folded);

    chars.forEach(({ start, end, folded }, i) => {
        // NFKD can turn one character into several (ﬁ = fi, ™ = tm)
        for (let ch of folded) {
            if (raw) {
                if (/\s/u.test(ch)) continue;
            } else {
                if (LETTER_FOLDS[ch]) ch = LETTER_FOLDS[ch];
                else if (SYMBOL_LETTERS[ch]) ch = SYMBOL_LETTERS[ch];
                else if (ch === '!' && isLetterAt(i - 1) && isLetterAt(i + 1)) ch = 'i';
                else if (WORD_BREAKS.test(ch)) ch = ' ';
                else if (DROPPED_PUNCTUATION.test(ch)) continue;
                else if (!IS_ALNUM.test(ch) && ch.trim() === '') continue;
                if (ch === ' ' && (norm === '' || norm.endsWith(' '))) continue;
            }
            for (let k = 0; k < ch.length; k++) {
                norm += ch[k];
                map.push(start);
                ends.push(end);
            }
        }
    });
    return { norm: norm.trimEnd(), map, ends };
}

const searchIndex = appleMusic.map((artist, order) => ({
    artist,
    order,
    ...normalizeWithMap(artist.artist),
    songs: (artist.songs || []).map(song => ({ song, ...normalizeWithMap(song.title) }))
}));

// Find `token` in `norm`, preferring the start of a word. Returns the start
// index, or -1.
function findToken(norm, token) {
    if (norm.startsWith(token)) return 0;
    const wordStart = norm.indexOf(' ' + token);
    if (wordStart !== -1) return wordStart + 1;
    return norm.indexOf(token);
}

function isWordStart(norm, index) {
    return index === 0 || norm[index - 1] === ' ';
}

// Ranges (in the original text) covered by the matched tokens
function toRanges(spans, map, ends) {
    spans.sort((a, b) => a[0] - b[0]);
    const merged = [];
    spans.forEach(([s, e]) => {
        const last = merged[merged.length - 1];
        if (last && s <= last[1]) last[1] = Math.max(last[1], e);
        else merged.push([s, e]);
    });
    return merged.map(([s, e]) => [map[s], ends[e - 1]]);
}

// Match every typed word against one text. Returns { spans, loose } or null
// when any word is missing. `loose` counts words found mid-word.
function matchTokens(norm, tokens) {
    const spans = [];
    let loose = 0;
    for (const token of tokens) {
        const at = findToken(norm, token);
        if (at === -1) return null;
        spans.push([at, at + token.length]);
        if (!isWordStart(norm, at)) loose++;
    }
    return { spans, loose };
}

// Search by artist, by song, or both ("ashanti baby"). Every typed word must
// be found: in the artist name, or in ONE song title (words may be split
// between the two). Artist-name matches rank first (exact, then starts-with,
// then word-start, then mid-word), then artists found through a song title.
// Ties keep the list order.
let rawIndex = null; // built the first time a punctuation-only search is made
function buildIndex(raw) {
    return appleMusic.map((artist, order) => ({
        artist,
        order,
        ...normalizeWithMap(artist.artist, raw),
        songs: (artist.songs || []).map(song => ({ song, ...normalizeWithMap(song.title, raw) }))
    }));
}

function searchArtists(query) {
    let { norm: q } = normalizeWithMap(query);
    let index = searchIndex;
    if (!q) {
        // Nothing but punctuation/symbols typed: match those characters literally
        if (!query.trim()) return null;
        q = normalizeWithMap(query, true).norm;
        if (!q) return null;
        rawIndex = rawIndex || buildIndex(true);
        index = rawIndex;
    }
    const tokens = q.split(' ');
    const results = [];

    index.forEach(entry => {
        const { norm, map, ends, artist, order } = entry;
        const byArtist = matchTokens(norm, tokens);

        // Words the artist name does not contain must all be in one title
        const inArtist = tokens.filter(token => findToken(norm, token) !== -1);
        const rest = tokens.filter(token => findToken(norm, token) === -1);
        const songs = [];
        if (!byArtist) {
            entry.songs.forEach(item => {
                const m = matchTokens(item.norm, rest);
                if (m) songs.push({ song: item.song, ranges: toRanges(m.spans, item.map, item.ends), loose: m.loose });
            });
        }

        if (!byArtist && songs.length === 0) return;

        let score;
        if (byArtist) {
            if (norm === q) score = 0;
            else if (norm.startsWith(q)) score = 1;
            else if (norm.includes(' ' + q)) score = 2;
            else score = 3 + byArtist.loose;
        } else {
            score = 10 + Math.min(...songs.map(s => s.loose));
        }

        // Highlight the words found in the artist name
        const artistSpans = (byArtist ? tokens : inArtist).map(token => {
            const at = findToken(norm, token);
            return [at, at + token.length];
        });

        results.push({
            artist,
            order,
            score,
            ranges: toRanges(artistSpans, map, ends),
            songs: songs.sort((a, b) => a.loose - b.loose) // artist-only hits list no songs
        });
    });

    results.sort((a, b) => (a.score - b.score) || (a.order - b.order));
    return results;
}

searchInput.classList.add('_c_search-flash'); // starts empty, so starts flashing

// The refresh button reloads the page and leaves this flag behind so the
// search bar gets focus once the page is back
try {
    if (sessionStorage.getItem('_focusSearch') === '1') {
        sessionStorage.removeItem('_focusSearch');
        searchInput.focus({ preventScroll: true });
    }
} catch (e) { /* storage blocked: just skip the focus */ }

function runSearch() {
    const query = searchInput.value;
    searchClear.hidden = query === '';
    // Flash the border whenever the box is empty (page load, ✕, backspace, Esc)
    searchInput.classList.toggle('_c_search-flash', query === '');
    const results = searchArtists(query);

    if (results === null) { // empty box: back to the full list
        logArtistNames(appleMusic);
        return;
    }

    const hits = new Map(results.map(r => [r.artist, r]));
    const count = results.length;
    setSearchCount(count === 1 ? '1 artist found' : `${count} artists found`);
    renderArtists(results.map(r => r.artist), `No artists or songs match “${query.trim()}”`, hits);
    document.getElementById('_id_frame').scrollTop = 0;
}

searchInput.addEventListener('input', runSearch);
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && searchInput.value) {
        searchInput.value = '';
        runSearch();
    }
});
searchClear.addEventListener('click', () => {
    searchInput.value = '';
    runSearch();
    searchInput.focus();
});

// Arriving from the 🏦 button on the Apple page, a slow phone can deliver a
// second tap to this page's buttons (wherever the layout puts, say, K). Ignore
// taps in the first moment after the page loads.
const pageOpenedAt = performance.now();
const IGNORE_TAPS_MS = 700;

function valueInit() {
    document.querySelector("._c_Apple-Music-grid").addEventListener("click", function (event) {
        // event.timeStamp is on the same clock as performance.now(): a click
        // made before this script finished loading is a leftover tap, not a choice
        if (event.timeStamp < pageOpenedAt + IGNORE_TAPS_MS) return;
        let value = event.target.innerText;
        buttonClick(value);
    });
}

valueInit();

// Always start at the top of the list, including when Safari restores the page
// (back button, reopened tab) at an old scroll position
function scrollListToTop() {
    document.getElementById('_id_frame').scrollTop = 0;
}
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
scrollListToTop();
window.addEventListener('load', scrollListToTop);
window.addEventListener('pageshow', scrollListToTop);



//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE

//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE
//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE
//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE
//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE
//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE

//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE
//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE
//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE
//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE
//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE

