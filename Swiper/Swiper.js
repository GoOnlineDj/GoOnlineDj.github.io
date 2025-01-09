
document.getElementById("_id_Good-News").innerHTML = setInterval(() => {
    document.getElementById("_id_Good-News").innerHTML = new Date().toLocaleTimeString();
  }, 1000);


const loadframe = document.getElementById("_id_frame");
loadframe.innerHTML = `<div class="swiper-container">

    <div class="brand" style="text-align: center;">
                                🛸
        </div>


                <div class="swiper-wrapper">
                        <div class="swiper-slide"> <img src="./images/17.jpg" alt="Michael Junior Williams" /> </div>
                        
                        <div class="btns">
                        <div disabled class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        </div>
                </div>
        </div>
    `;    











       
