function showClock() {
    document.getElementById("_id_Good-News").textContent = new Date().toLocaleTimeString();
}
showClock(); // show the time right away instead of after the first second
setInterval(showClock, 1000);


window.onload = () => {
    if (window.opener) {
        // file:// pages report the origin "null", which postMessage rejects as a target
        window.opener.postMessage({ ready: true }, window.location.origin === 'null' ? '*' : window.location.origin);
    }
};


let iframe = null;

window.addEventListener("message", (event) => {
    // Only accept Apple Music links sent by the FINDtxt page that opened this tab
    if (event.source !== window.opener || event.origin !== window.location.origin) return;
    const src = event.data && event.data.src;
    if (typeof src !== "string" || !src.startsWith("https://embed.music.apple.com/")) return;

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
        document.getElementById("_id_iframe").appendChild(iframe);
    }
    iframe.src = src;
});
