
setInterval(() => {
    document.getElementById("_id_Good-News").innerHTML = new Date().toLocaleTimeString();
}, 1000);

  
    // Include Swiper library
    // import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

    const loadframe = document.getElementById("_id_frame");
loadframe.innerHTML = `


                  <div class="swiper-container">
                   <div class="_c_space-ship"> 
                        🛸
                    </div>
            <div class="swiper-wrapper">
                        <div class="swiper-slide"> <img src="./images/17.jpg" alt="Michael Junior Williams"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-W3Schools/Michael_J_Williams_Certificate_of_Completion_Front_End_Development_Michael_Junior_Williams.png" alt="W3Schools"></div>
                        <div class="swiper-slide"> <img src="./images/web-development-W3Schools/Michael_J_Williams_Certificate_of_Completion_JavaScript_Michael_Junior_Williams.png" alt="W3Schools"></div>
                        <div class="swiper-slide"> <img src="./images/web-development-W3Schools/Michael_J_Williams_Certificate_of_Completion_CSS_Michael_Junior_Williams.png" alt="W3Schools"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-W3Schools/Michael_J_Williams_Certificate_of_Completion_HTML_Michael_Junior_Williams.png" alt="W3Schools"></div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Introduction-HTML.png" alt="Frontend Masters"></div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Introduction-CSS.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Introduction-HTML_Forms.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Introduction_Website_Embeds_GitHub_Pages.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Calculator_Project_HTML_CSS.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Introduction_to_JavaScript.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Calculator_Project_JavaScript.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Using_JavaScript_in_Websites.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Build_a_Game_Project_Feed-A-Star-Mole.png" alt="Frontend_Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Career_Guidance.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Complete_Intro_to_Web_Development_v3.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Getting_Started_with_CSS.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Getting_Started_with_JavaScript_v2.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_CSS_Foundations.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_JavaScript_From_First_Steps_to_Professional.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Website_Accessibility_v2.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Getting_a_Software_Engineering_Job_v3.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Web_Development_Project_Personal_Portfolio_Website.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Software_Developer_Success_Soft_Skills_Testing.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Introduction_to_Dev_Tools_v3.png" alt="Frontend Masters"> </div>
                        <div class="swiper-slide"> <img src="./images/web-development-Frontend-Masters/Michael_Junior_Williams_Frontend_Masters_Complete_Intro_to_Linux_and_the_Command-Line.png" alt="Frontend Masters"> </div>
         
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
       
                    </div>
           
                    </div>
                    
`;

    // Swiper
    new Swiper(".swiper-container", {
        speed: 300,
        effect: "flip",
        loop: true,
        spaceBetween: 100,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1000, // Auto flip every 7 seconds
            disableOnInteraction: false,
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


