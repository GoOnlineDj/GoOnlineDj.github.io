
document.getElementById("_id_Good-News").innerHTML = setInterval(() => {
    document.getElementById("_id_Good-News").innerHTML = new Date().toLocaleTimeString();
  }, 1000);


const loadframe = document.getElementById("_id_frame");
loadframe.innerHTML = `<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"> <img src="./images/17.jpg" alt="Michael Junior Williams" /> </div>
            
            <div class="btns">
            <div disabled class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
  `;    










new Swiper(".swiper-container", {

    speed: 400,
    effect: "flip",
    loop: true,
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

//navigation physics 

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.brand');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(ballXY.get()).start(ballXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: ballXY.get(),
            velocity: ballXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            mass: 16,
            damping: 100,
        }).start(ballXY);
    });


;

       
