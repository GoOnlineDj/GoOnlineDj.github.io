
document.getElementById("_id_Good-News").innerHTML = setInterval(() => {
    document.getElementById("_id_Good-News").innerHTML = new Date().toLocaleTimeString();
  }, 1000);


  
    // Swiper

    new Swiper("._c_swiper-container", {

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
    
    const ball = document.querySelector('._c_space-ship');
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






       
