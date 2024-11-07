let i = 0;
let z = 0;

let word = "";

let currentRow = 0;
const MAX_LETTERS = 5;
const maxRows = 6;
let show = false;
let done = false;
let isLoading = false;



async function valueINIT() {

    const boxes = document.querySelectorAll(".div-grid");
    console.log(boxes);
    const logoDiv = document.querySelector("h2.logo");
    console.log(logoDiv);
    isLoading = true;
    loading(isLoading);
    const promise = await fetch("https://words.dev-apis.com/word-of-the-day?random=1");
    const promiseProcessing = await promise.json();
    const answer = promiseProcessing.word.toUpperCase();
    const answerParts = answer.split("");
    isLoading = false;
    loading(isLoading);

    function backSpaceDelete() {
        if (word.length < 1) {
            return;
        }
        else {
            word = word.substring(0, word.length - 1);
            boxes[currentRow * MAX_LETTERS + word.length].innerHTML = "💎";
        }
    }

    function makeMap(array) {
        console.log("makeMap being called");
        let obj = {};

        for (i = 0; i < array.length; i++) {
            let letter = array[i];
            if (obj[letter]) {
                obj[letter]++;
            }
            else {
                obj[letter] = 1;
            }
            console.log("map object for keeping letter count", obj);

        }
        return obj;
    }



    function loading(isLoading) {

        logoDiv.classList.toggle("hide", isLoading)

    }



    console.log("answerParts from promise", typeof (answerParts), answerParts)

    console.log("secret word from server is =", answer, "typeof for secret word =", typeof (answer));




    document.addEventListener("keydown", function (event) {

        if (done) {
            return;
        }

        isLoading = false;
        loading(isLoading);


        console.log("event.key", event.key)
        letterData = event.key;

        if (isLetter(letterData)) {

            if (word.length < MAX_LETTERS) {
                word += letterData.toLocaleUpperCase();
            }
            else {
                word = word.substring(0, word.length - 1) + letterData.toLocaleUpperCase();
            }

            boxes[(MAX_LETTERS * currentRow) + word.length - 1].innerHTML = letterData.toLocaleUpperCase();

        }

        function isLetter(letterData) {
            return /^[a-zA-Z]$/.test(letterData);
        }


        if (letterData === "Enter") {
            console.log("user pressed Enter")
            commit();
        }


        if (event.key === "Backspace") {
            backSpaceDelete();
        }



        async function commit() {




            if (word.length !== MAX_LETTERS) {
                alert("5 letters please + thank you");
                return;
            }

            else {
                const promise = await fetch("https://words.dev-apis.com/validate-word", {
                    method: "POST", body: JSON.stringify({ word: word }),
                });
                const promiseProcessing = await promise.json();
                const wordStatus = await promiseProcessing.validWord;

                console.log("!validWord or validWord", wordStatus);

                const map = makeMap(answerParts);
                console.log("map object from makeMap function 1983", map)
            }

            isCorrect();

            for (c = 0; c < 5; c++) {
                if (word[c] === answer[c]) {
                    boxes[currentRow * MAX_LETTERS + c].classList.add("green");
                    map[word[c]]--;
                    console.log("green");


                }

                else if (answerParts.includes(word[c]) && (map[word[c]] > 0)) {
                    boxes[currentRow * MAX_LETTERS + c].classList.add("yellow");
                    map[word[c]]--;
                    console.log("yellow");

                }
                else {
                    boxes[currentRow * MAX_LETTERS + c].classList.add("grey");
                    console.log("grey");

                }
            }


            let wordParts = word.split("");

            console.log("wordParts", wordParts);

            if (wordStatus === false) {
                (alert("sorry it seems that's not a word in our software at this moment"));
                word = "";
                for (i = 0; i < 5; i++) {
                    boxes[currentRow * MAX_LETTERS + i].innerHTML = "";

                }
                currentRow = currentRow;
                return;

            }
            currentRow++;
            word = "";

            if (currentRow === maxRows) {

                alert(`THANKS FOR PLAYING THE GAME + the word was = ${answer}`);
                done = true;
                return;
            }

            console.log("!validWord or validWord", wordStatus);
        }




        function isCorrect() {
            if (word === answer) {
                alert(`WOW YOU WON THE GAME + THE WINNING "WORD" WAS = ${answer} + Thanks For Playing`);
                for (i = 0; i < 30; i++) {
                    boxes[currentRow * MAX_LETTERS + i].innerHTML = "💎";

                }

                logoDiv.classList.add('show');


                for (c = 0; c < 5; c++) {
                    boxes[currentRow * MAX_LETTERS + c].classList.add("green");

                    console.log("you won the game")

                    done = true;

                    return;

                }
            }

        }


    });

};

valueINIT();
