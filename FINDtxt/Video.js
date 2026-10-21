function showClock() {
    document.getElementById("_id_Good-News").textContent = new Date().toLocaleTimeString();
}
showClock(); // show the time right away instead of after the first second
setInterval(showClock, 1000);


// file:// pages have an opaque origin (event.origin is "null", location.origin is
// "file://"), which postMessage rejects as a target, so fall back to "*" there.
function messageTargetOrigin() {
    return window.location.protocol === 'file:' ? '*' : window.location.origin;
}

window.onload = () => {
    if (!window.opener) {
        // Opened on its own (no search page sent a song), so say what to do
        // instead of leaving an empty player area.
        const hint = document.createElement("p");
        hint.style.cssText = "padding:2rem;text-align:center;color:#fff;font-size:1.25rem;";
        hint.innerHTML = 'No video selected. <a href="FINDtxt.html" style="color:#31b28a">Search for an artist</a> and click a song to play it here.';
        document.getElementById("_id_iframe").appendChild(hint);
    }
    if (window.opener) {
        // file:// pages report the origin "null", which postMessage rejects as a target
        window.opener.postMessage({ ready: true }, messageTargetOrigin());
    }
};


let iframe = null;

window.addEventListener("message", (event) => {
    // Only accept Apple Music links sent by the FINDtxt page that opened this tab
    if (event.source !== window.opener) return;
    if (window.location.protocol !== 'file:' && event.origin !== window.location.origin) return;
    const src = event.data && event.data.src;
    if (typeof src !== "string" || !src.startsWith("https://embed.music.apple.com/")) return;

    // Birthday tooltip on the 👑 (styled in Apple+Music.css via data-tooltip)
    const crown = document.querySelector("._c_CROWN");
    if (crown) {
        const tip = typeof event.data.tooltip === "string" ? event.data.tooltip : "";
        if (tip) crown.setAttribute("data-tooltip", tip);
        else crown.removeAttribute("data-tooltip");
    }

    // Reuse one player instead of adding a new iframe per message
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.className = "random-iframe";
        iframe.allow = "fullscreen; autoplay; encrypted-media";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.referrerPolicy = "strict-origin";
        iframe.sandbox = "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation";
        iframe.frameBorder = 0;
        iframe.title = "Apple Video";
        // Apple+Music.css keeps .random-iframe invisible until it has .ready;
        // this page has no preload step, so show the player straight away.
        iframe.classList.add("ready");
        document.getElementById("_id_iframe").appendChild(iframe);
    }
    loadPlayer(src);
});


// Poster retry. Apple's player fetches its poster image from Apple's image
// CDN (is1-ssl.mzstatic.com). When that request drops mid-flight (Chrome logs
// net::ERR_CONNECTION_CLOSED for it) the video still plays but the player
// shows no picture, and nothing inside the cross-origin player retries it.
// The page can't see the poster request, but it can fetch this video's
// artwork from the same CDN (URL from Apple's lookup API) as a health check.
// When that fails, the player is reloaded with a fresh session so it asks
// for its poster again - unless the visitor has already clicked the player,
// since a reload would cut off playback.
const POSTER_LOOKUP_TIMEOUT_MS = 10000;
const POSTER_LOAD_TIMEOUT_MS = 8000;
const POSTER_MAX_RELOADS = 2;
let playerLoadSeq = 0;
let lookupSeq = 0;
let playerClicked = false;

function videoIdOf(src) {
    const match = src.match(/\/(\d+)(?:[?#]|$)/);
    return match ? match[1] : null;
}

// Apple's lookup API sends no CORS header for ordinary sites, so fetch() is
// blocked; its JSONP form (&callback=) loads as a <script> instead.
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
        const timer = setTimeout(() => done(null), POSTER_LOOKUP_TIMEOUT_MS);
        window[cb] = done;
        script.onerror = () => done(null);
        script.src = `https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}&entity=musicVideo&callback=${cb}`;
        document.head.appendChild(script);
    });
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

// true when the video's artwork loads, false when the image fails, null when
// there was nothing to check against (lookup failed or no id in the link).
async function artworkLoads(src) {
    const id = videoIdOf(src);
    if (!id) return null;
    const data = await lookupJsonp(id);
    const hit = data && data.results && data.results[0];
    const art = hit && hit.artworkUrl100;
    if (!art) return null;
    return loadImage(art.replace(/\d+x\d+bb/, "960x540bf"), POSTER_LOAD_TIMEOUT_MS);
}

function loadPlayer(src, attempt = 0) {
    const seq = ++playerLoadSeq;
    playerClicked = false;
    const playerUrl = new URL(src);
    playerUrl.searchParams.set("_playerSession", `${Date.now()}`);
    iframe.addEventListener("load", async () => {
        if (seq !== playerLoadSeq) return; // a newer video has been loaded since
        const ok = await artworkLoads(src);
        if (seq !== playerLoadSeq || ok !== false || playerClicked) return;
        if (attempt >= POSTER_MAX_RELOADS) {
            console.warn("Apple's image CDN is not delivering this video's artwork; giving up after " + attempt + " player reloads.");
            return;
        }
        console.warn("Apple's image CDN did not deliver this video's artwork; reloading the player (attempt " + (attempt + 1) + ").");
        loadPlayer(src, attempt + 1);
    }, { once: true });
    iframe.src = playerUrl.href;
}


// Acknowledge a click on the player: the arrow buttons flash red, white, blue
// (0.5s each) twice - the play-ack animation in Apple+Music.css - so the visitor
// knows the click registered and the song is coming. A click inside the
// cross-origin player is only visible to this page as the window losing
// focus to the iframe, so that is what is watched. Afterwards focus is taken
// back by an invisible button so the next click on the player registers too.
const focusCatcher = document.createElement("button");
focusCatcher.type = "button";
focusCatcher.tabIndex = -1;
focusCatcher.style.cssText = "position:fixed;left:-9999px;width:1px;height:1px;opacity:0;";
document.body.appendChild(focusCatcher);

function flashPlayAck() {
    const arrows = [...document.querySelectorAll("button")]
        .filter(btn => /^[⏪⏩]$/.test(btn.textContent.trim()));
    arrows.forEach(btn => {
        btn.classList.remove("play-ack");
        void btn.offsetWidth; // restart the animation if it is already running
        btn.classList.add("play-ack");
        btn.addEventListener("animationend", () => btn.classList.remove("play-ack"), { once: true });
    });
}

window.addEventListener("blur", () => {
    setTimeout(() => {
        if (!iframe || document.activeElement !== iframe) return;
        playerClicked = true; // see loadPlayer(): no poster-retry reload once playing
        flashPlayAck();
        setTimeout(() => {
            if (document.activeElement === iframe && !document.fullscreenElement) {
                focusCatcher.focus({ preventScroll: true });
            }
        }, 1000);
    }, 0);
});
