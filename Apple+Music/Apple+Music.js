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

function loadAppleMusic(src) {
    cancelAdvance();
    clearTimeout(autoLoadInterval);
    currentUrl = src;
    window.location.replace(buildTrackUrl(src).href);
}

// Builds the iframe for the track this page load was handed. Runs exactly
// once per page load (from the bootstrap deep link at the bottom of this
// file) - loadAppleMusic() above handles every later switch via navigation.
function renderIframe(src) {
    currentUrl = src;
    const playerUrl = new URL(src);
    playerUrl.searchParams.set("_playerSession", `${Date.now()}`);
    const nextIframe = document.createElement("iframe");
    nextIframe.className = "random-iframe";
    // Apple's own embed snippet requires the "*" wildcard on cross-origin allow
    // directives and allow-storage-access-by-user-activation in the sandbox;
    // without them the player can't reach its signed-in/accelerated playback
    // path and silently falls back to a path where audio and video drift apart.
    // "fullscreen *" in allow already grants fullscreen; allowFullscreen would
    // just trigger a console warning that it's being overridden.
    nextIframe.allow = "autoplay *; encrypted-media *; fullscreen *; clipboard-write";
    nextIframe.width = "100%";
    nextIframe.height = "100%";
    nextIframe.referrerPolicy = "strict-origin";
    nextIframe.sandbox = "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation";
    nextIframe.frameBorder = 0;
    nextIframe.title = "Apple Music";
    nextIframe.name = "Apple Music";
    nextIframe.addEventListener("load", () => {
        scheduleNextCycle(CYCLE_DELAY);
        cancelAdvance();
        reclaimFocus();
    });
    nextIframe.src = playerUrl.href;
    iframe = nextIframe;
    Appleiframe.appendChild(iframe);
    scheduleNextCycle(LOAD_TIMEOUT);
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
const CYCLE_DELAY = 3000;
const LOAD_TIMEOUT = 15000; // move on if an embed never finishes loading

function scheduleNextCycle(delay) {
    clearTimeout(autoLoadInterval);
    if (autoCycling) autoLoadInterval = setTimeout(cycleThroughArtists, delay);
}

function cycleThroughArtists() {
    if (!autoCycling) return;
    // Don't load embeds in a background tab
    if (document.hidden) {
        scheduleNextCycle(CYCLE_DELAY);
        return;
    }
    currentSongIndex = (currentSongIndex + 1) % sortedAppleMusic[currentArtistIndex].songs.length;
    if (currentSongIndex === 0) {
        currentArtistIndex = (currentArtistIndex + 1) % sortedAppleMusic.length;
    }
    // updateIframeSrc() -> loadAppleMusic() reloads the page for this track,
    // so there's no "still loading" state left here to schedule a fallback for.
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

const durationCache = new Map();
let advanceTimer;

async function getDurationMs(src) {
    const match = src.match(/\/(\d+)(?:[?#]|$)/);
    if (!match) return null;
    const id = match[1];
    if (durationCache.has(id)) return durationCache.get(id);
    try {
        const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&country=us`);
        const data = await res.json();
        const ms = (data.results && data.results[0] && data.results[0].trackTimeMillis) || null;
        durationCache.set(id, ms);
        return ms;
    } catch {
        return null; // lookup failed: just don't auto-advance this one
    }
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
    clearInterval(countdownTicker);
    advanceNotice.style.display = "none";
}

function scheduleAdvance(ms) {
    cancelAdvance();
    advanceTimer = setTimeout(startCountdown, Math.max(0, ms - COUNTDOWN_MS));
}

function startCountdown() {
    let remaining = Math.round(COUNTDOWN_MS / 1000);
    const tick = () => {
        if (remaining <= 0) {
            cancelAdvance();
            AppleMusicForward();
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

// Click on the video: (re)start the auto-advance timer. While the preview
// cycle is still running, clicks on the video are ignored so it keeps cycling
// until the user presses an arrow, a flower, or next/previous.
window.addEventListener("blur", () => {
    setTimeout(() => {
        if (document.activeElement !== iframe) return;
        if (autoCycling) return;
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
    if (!Number.isNaN(pa)) a = pa;
    if (!Number.isNaN(ps)) s = ps;
    if (!Number.isNaN(pai)) currentArtistIndex = pai;
    if (!Number.isNaN(psi)) currentSongIndex = psi;
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