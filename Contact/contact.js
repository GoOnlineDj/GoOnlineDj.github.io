document.getElementById("_id_Good-News").innerHTML = setInterval(() => {
    document.getElementById("_id_Good-News").innerHTML = new Date().toLocaleTimeString();
  }, 1000);

document.getElementById("_id_frame").innerHTML = `<div class="contact-body">
    <div class="contact-index-wrapper">
     
        <section>
        <hr>
            <div style="text-align: center;">
                <a href="https://www.cnn.com/profiles" target="_blank">
                    <h4 class="_c_Contact"> + Contact + </h4>
                </a>
            </div>

        <hr>

        <img src="./Images/UnsignedGoldLLC-Gold-Equation.jpg.webp" alt="UnsignedGoldLLC-Gold-Equation"
            title="UnsignedGoldLLC-Gold-Equation">

        </section>
        <hr>
         <section>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/G7KNmW9a75Y?si=2YozCCi2SD-6mplm" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>
            <hr>
            <section>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28741.256812237058!2d-80.15580631743448!3d25.781887243459224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b48e8bc080f1%3A0x7afeece4a9efe6bd!2sSouth%20Beach%2C%20Miami%20Beach%2C%20FL%2033139!5e0!3m2!1sen!2sus!4v1756515581959!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <hr>
            <section>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/4q-Y6wt1h3k?si=_rj6p_a3fKRRNDPg" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>
            <hr>
            <section>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/QYeElOeWz6M?si=sUTqnxcqjCiiJ5bI" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>
            <hr>
            <section>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/nz4iunAoanE?si=-HCU2c66eUhsvh1F" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>
            <hr>
            <section style="text-align: center;">
                <div style="text-align: center;">
                    + The #1 Internet DJ +
                    <br>
                    + Music+Videos +
                    <br>

                    + General Advise From DJ+CEO +
                    <br>
                    +
                    <br>
                    ++very+IMPORTANT++ Try Not To
                    <br>
                    Rewind Any Of The +Music +Videos When the
                    <br>
                    +Video Is +Playing +
                    <br>
                    +
                    <br>
                    + THANK YOU +
                </div>
            </section>
            <hr>
            <section>
                <div>
                    +GOD
                    <br>
                    +=-=+
                    <br>
                    + CEO+DJ + Mail+Location + :
                    <br>
                    + 3183 Wilshire Blvd + 196D54 +
                    <br>
                    + Los Angeles +
                    <br>
                    + CA +
                    <br>
                    + 90010 +
                    <br>
                </div>
            </section>
            <hr>
    </div>
</div> `;






//////////////////////////////////////////////////////////////////

const scrollUpButtons = document.querySelectorAll('._c_Scroll-Up');
const scrollDownButtons = document.querySelectorAll('._c_Scroll-Down');

const id_frame = document.getElementById('_id_frame');

if (!id_frame) {
    console.error("id_frame element not found. Please check the selector or ensure the element exists in the DOM.");
}

let scrollInterval;
let isHolding = false;

function startScrolling(direction) {
    if (id_frame) {
        isHolding = true;
        scrollInterval = setInterval(() => {
            id_frame.scrollBy({ top: direction === 'up' ? -500 : 500, behavior: 'smooth' }); // Faster scrolling for holding
        }, 500); // Faster interval for holding
    }
}

function stopScrolling() {
    isHolding = false;
    clearInterval(scrollInterval);
}

scrollUpButtons.forEach(button => {
    button.addEventListener('mousedown', () => startScrolling('up'));
    button.addEventListener('mouseup', stopScrolling);
    button.addEventListener('mouseleave', stopScrolling); // Stop scrolling if the mouse leaves the button
    button.addEventListener('click', () => {
        if (!isHolding) id_frame.scrollBy({ top: -300, behavior: 'smooth' }); // Slower scroll for clicking
    });
});

scrollDownButtons.forEach(button => {
    button.addEventListener('mousedown', () => startScrolling('down'));
    button.addEventListener('mouseup', stopScrolling);
    button.addEventListener('mouseleave', stopScrolling); // Stop scrolling if the mouse leaves the button
    button.addEventListener('click', () => {
        if (!isHolding) id_frame.scrollBy({ top: 300, behavior: 'smooth' }); // Slower scroll for clicking
    });
});



// setInterval(() => {
//     const currentSecond = new Date().getSeconds();
//     document.documentElement.style.setProperty('--current-second', currentSecond);
// }, 1000);


//////////////////////////////////////////////////////////////////