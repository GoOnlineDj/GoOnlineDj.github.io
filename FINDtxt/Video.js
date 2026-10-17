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
    iframe.src = src;
});
