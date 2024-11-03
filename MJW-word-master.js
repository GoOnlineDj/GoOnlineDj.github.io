const wordClick = document.querySelector(".main-body");

// const try01 = document.querySelector(".div-grid-01")
// const try02 = document.querySelector(".div-grid-02")

const boxes = document.querySelectorAll(".div-grid")
console.log(boxes);

let i = 0
letter = "M"

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}


wordClick.addEventListener("keydown", function (event) {

    letter = event.key;

    if (isLetter(letter)) {


        console.log("hi how are you?", letter)
        console.log(typeof letter)
        console.log(event)
        console.log(event.key)
        boxes[i].innerHTML = event.key
        // try02.innerHTML = event.key
        // console.log("try01.innerHTML", try01.innerHTML)
        console.log("boxes[9].innerHTML", boxes[9].innerHTML)
        i++;

    }

    else {
        return;
    }

});












