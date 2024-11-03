

document.querySelector(".SpinnerSTOP").addEventListener("click", function () {
    alert('Internet Activity On This Apple Music Page Has STOP');

    // Clear intervals and timeouts
    let id = window.setTimeout(function () { }, 0);
    while (id--) {
        window.clearTimeout(id);
        window.clearInterval(id);
    }

    // Abort ongoing fetch requests
    if (window.AbortController) {
        const controller = new AbortController();
        const signal = controller.signal;
        controller.abort();
    }

    // Override XMLHttpRequest to prevent new requests
    (function (open) {
        XMLHttpRequest.prototype.open = function () {
            console.log('Blocked XMLHttpRequest');
        };
    })(XMLHttpRequest.prototype.open);

    // Stop loading the page
    window.stop();

    document.querySelector(".spinner").classList.remove("spinner")

});

