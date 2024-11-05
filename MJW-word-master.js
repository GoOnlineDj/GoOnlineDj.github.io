let i = 0;
let z = 0;

let word = "";

let currentRow = 0;
const MAX_LETTERS = 5;
const maxRows = 6;


async function valueINIT() {

    const boxes = document.querySelectorAll(".div-grid")
    console.log(boxes);

    const promise = await fetch("https://words.dev-apis.com/word-of-the-day?random=1");
    const promiseReady = await promise.json();
    const answer = promiseReady.word.toUpperCase();
    const answerParts = answer.split("");

    function makeMap(array) {
        console.log("makeMap being called")
        let obj = {};

        for (i = 0; i < array.length; i++) {
            let letter = array[i];
            if (obj[letter]) {
                obj[letter]++;
            }
            else {
                obj[letter] = 1;
            }
            console.log("object", obj);

        }
        return obj;
    }





    console.log("answerParts from promise", typeof (answerParts), answerParts)

    console.log("promise", promiseReady);
    console.log("answer", answer, typeof (answer));


    document.addEventListener("keydown", function (event) {

        let letter = event.key;

        if (isLetter(letter)) {

            if (word.length < MAX_LETTERS) {
                word += letter.toLocaleUpperCase();
            }
            else {
                word = word.substring(0, word.length - 1) + letter.toLocaleUpperCase();
                console.log("mjw", "letter", letter, "word0", word[0], "word1", word[1], "word2", word[2], "word3", word[3], "word4", word[4], "word5", word[5], "word6", word[z]);
            }

            boxes[(MAX_LETTERS * currentRow) + word.length - 1].innerHTML = letter.toLocaleUpperCase();

        }

        function isLetter(letter) {
            return /^[a-zA-Z]$/.test(letter);
        }


        if (event.key === "Enter") {
            console.log("enter enter")
            commit();
        }





        async function commit() {


            const map = makeMap(answerParts);
            console.log("map object from makeMap function 1983", map)


            if (word.length !== MAX_LETTERS) {
                console.log("not 5 char")
                //do nothing
                return;
            }
            else {
                isCorrect();

                for (c = 0; c < 5; c++) {
                    if (word[c] === answer[c]) {
                        boxes[currentRow * MAX_LETTERS + c].classList.add("green");
                        map[word[c]]--;
                        console.log("green");
                        console.log(map);

                    }
                    else if (map[word[c]] > 0) {
                        boxes[currentRow * MAX_LETTERS + c].classList.add("yellow");
                        map[word[c]]--;
                        console.log("yellow");
                        console.log(map);
                    }
                    else {
                        boxes[currentRow * MAX_LETTERS + c].classList.add("grey");
                    }
                }


                const wordParts = word.split("");

                console.log("wordParts", wordParts);

                if (currentRow === maxRows) {

                    alert("DONE DONE DONE");
                    return;
                }
                currentRow++;
                word = "";


            }

            function isCorrect() {
                if (word === answer) {
                    alert("you wow the game");
                    for (c = 0; c < 5; c++) {
                        boxes[currentRow * MAX_LETTERS + c].classList.add("green");

                    }
                }

            }





        }


        // to validate the word



        //to mark as correct

        // to do win or loose 

    });


}
valueINIT();