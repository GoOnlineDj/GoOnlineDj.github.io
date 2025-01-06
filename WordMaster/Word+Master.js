let i = 0;
let z = 0;

let guess = "";

let currentRow = 0;
let decor = 0;
const MAX_LETTERS = 5;
const maxRows = 6;
let show = false;
let done = false;

async function valueINIT() {
  const boxes = document.querySelectorAll(".div-grid");
  const logoDiv = document.querySelector("h2.logo");
  const promise = await fetch("https://words.dev-apis.com/word-of-the-day?random=1");
  const promiseProcessing = await promise.json();
  const answer = promiseProcessing.word.toUpperCase();
  const answerParts = answer.split("");

 //////////////////////////////////////////////////////////////////////////////////////////////////

  function backSpaceDelete() {
    if (guess.length < 1) {
      return;
    } else {
      guess = guess.substring(0, guess.length - 1);
      boxes[currentRow * MAX_LETTERS + guess.length].innerHTML = "💎";
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////

  function isLetter(letterData) {
    return /^[a-zA-Z]$/.test(letterData);
  }

   //////////////////////////////////////////////////////////////////////////////////////////////////

  function userInputData(letterData) {
    console.log("letterData", letterData);
    if (isLetter(letterData)) {
      if (guess.length < MAX_LETTERS) {
        guess += letterData.toLocaleUpperCase();
      } else {
        guess = guess.substring(0, guess.length - 1) + letterData.toLocaleUpperCase();
      }

      boxes[MAX_LETTERS * currentRow + guess.length - 1].innerHTML = letterData.toLocaleUpperCase();
    }

  }

 //////////////////////////////////////////////////////////////////////////////////////////////////

  function isCorrect() {
    if (guess === answer) {
      alert(`WOW YOU WON THE GAME + THE WINNING "WORD" WAS = ${answer} + Thanks For Playing`);
      for (i = 0; i < 30; i++) {
        if (Math.floor(i / MAX_LETTERS) !== currentRow) {
          boxes[i].classList.add("green");
          boxes[i].innerHTML = "💎";
        }
      }

      for (c = 0; c < 5; c++) {
        boxes[currentRow * MAX_LETTERS + c].classList.add("green");

        console.log("you won the game");

        done = true;
        return;
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////

  console.log("answerParts from promise", typeof answerParts, answerParts);
  console.log("secret word from server is =", answer, "typeof for secret word =", typeof answer);

  document.addEventListener("keydown", function (event) {
    if (done) {
      return;
    }

    console.log("event.key", event.key);
    letterData = event.key;

    userInputData(letterData);

    

    if (letterData === "Enter") {
      console.log("user pressed Enter");
      commit();
    }

    if (event.key === "Backspace") 
      backSpaceDelete();
    }
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  async function commit() {

    if (done) {
      console.log("currentRow DONE", currentRow);
      return;
    }

    if (guess.length !== MAX_LETTERS) {
      alert("5 letters please + thank you");
      currentRow = currentRow;
      console.log("guess.length", guess.length);
      console.log("currentRow MAX_LETTERS", currentRow);
      return;
    }

//////////////////////////////////////////////////////////////////////////////////////////////////

  console.log("guess", guess);

//////////////////////////////////////////////////////////////////////////////////////////////////

  if (guess.length === MAX_LETTERS)  {
    const promise = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: guess }),
    });
    const promiseProcessing = await promise.json();
    const wordStatus = await promiseProcessing.validWord;


    console.log("!validWord or validWord", wordStatus);

//////////////////////////////////////////////////////////////////////////////////////////////////

if (wordStatus === false) {
  alert("sorry it seems that's not a word in our software at this moment");
  guess = "";
  for (i = 0; i < 5; i++) {
    boxes[currentRow * MAX_LETTERS + i].innerHTML = "$";
  }
  currentRow = currentRow;
  return;
}

//////////////////////////////////////////////////////////////////////////////////////////////////

    function makeMap(array) {
      console.log("makeMap being called");
      let obj = {};

      for (i = 0; i < array.length; i++) {
        let letter = array[i];
        if (obj[letter]) {
          obj[letter]++;
        } else {
          obj[letter] = 1;
        }
        console.log("map object for keeping letter count", obj);
      }
      return obj;
    }


    const map = makeMap(answerParts);
    console.log("map object from makeMap function 1983", map);

    isCorrect();

    const guessParts = guess.split("");


    console.log("guessParts", guessParts);

///////////////////////////////////////////////////////////////////////////////////////////////
  
  if (wordStatus) {

    if (guess == "")
    {
      return;
    }

    else  {
    for (let c = 0; c < 5; c++) {
      if (guess[c] === answer[c]) {
        boxes[currentRow * MAX_LETTERS + c].classList.add("green");
        map[guess[c]]--;
        console.log("green");

        decor = currentRow;
        while (decor < 5) {
          boxes[(decor + 1) * MAX_LETTERS + c].innerHTML = "💎";
          decor++;
        }
      } else if (answerParts.includes(guessParts[c]) && map[guessParts[c]] > 0) {
        boxes[currentRow * MAX_LETTERS + c].classList.add("yellow");
        map[guess[c]]--;
        console.log("yellow");

        decor = currentRow;
        while (decor < 5) {
          boxes[(decor + 1) * MAX_LETTERS + c].innerHTML = "🧬";
          decor++;
        }
      } else {
        boxes[currentRow * MAX_LETTERS + c].classList.add("gray");
        console.log("gray");
      }
    }
  }
    
    guess = "";
    currentRow++;

    if (currentRow === maxRows) {
      alert(`THANKS FOR PLAYING THE GAME + the word was = ${answer}`);
      done = true;

    }

    console.log("!validWord or validWord", wordStatus);
    
  } 

} 
else return;

  }

/////////////////////////////////////////////////////////////////////////////////////////////

  const submitWord = document.querySelectorAll("._c_Apple-Music-Video-submit");
  submitWord.forEach(button => {
    button.addEventListener("click", () => {
      if (done) {
        return;
      }

      if (guess.length !== MAX_LETTERS) {
        alert("5 letters please + thank you");
        console.log("guess.length", guess.length);
        console.log("currentRow MAX_LETTERS", currentRow);
        return;
      }
      else commit();
    });
  });
  
/////////////////////////////////////////////////////////////////////////////////////////////

  const deleteWord = document.querySelectorAll("._c_Apple-Music-Video-delete");
  deleteWord.forEach(button => {
    button.addEventListener("click", () => {
      if (done) {
        return;
      }
      if (guess.length === 0) {
        currentRow = currentRow;
        alert("no letters to delete");
        return;
      }
      else backSpaceDelete();
    });
  });
  
////////////////////////////////////////////////////////////////////////////////////////////

  const alphabetButtons = document.querySelectorAll("._c_Apple-Music-Video-alphabet-buttons");
  alphabetButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    if (done) {
    return;
    }
      const value = event.target.innerText;
      console.log("event 007", value);
      userInputData(value);
    });
 });

/////////////////////////////////////////////////////////////////////////////////////////////

}


valueINIT();
