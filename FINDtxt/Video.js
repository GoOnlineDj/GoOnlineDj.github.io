document.getElementById("_id_Good-News").innerHTML = setInterval(() => {
    document.getElementById("_id_Good-News").innerHTML = new Date().toLocaleTimeString();
}, 1000);




window.addEventListener("message", (event) => {
    const { src } = event.data;
    console.log("Received src:", src);

    let iframe = document.createElement("iframe");
    iframe.className = "random-iframe";
    iframe.src = src;
    iframe.allow = "fullscreen; autoplay; encrypted-media";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.referrerPolicy = "strict-origin";
    iframe.sandbox = "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation";
    iframe.frameBorder = 0;
    iframe.title = "Apple Video";

    document.getElementById("_id_iframe").appendChild(iframe);
});


















