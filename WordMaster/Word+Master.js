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
      window.location.href = "./+M-J-W+.html#word-game";
      alert(`WOW YOU WON THE GAME + THE WINNING "WORD" IS = ${answer} + Thanks For Playing`);
      for (i = 0; i < 30; i++) {
        if (Math.floor(i / MAX_LETTERS) !== currentRow) {
          boxes[i].classList.add("green");
          boxes[i].innerHTML = "💎";
        }
      }

      for (let c = 0; c < 5; c++) {
        boxes[currentRow * MAX_LETTERS + c].classList.add("green");


        done = true;
        return;
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////

  // For the site owner: shows today's word in the browser console
  console.log("secret word from server is =", answer);

  document.addEventListener("keydown", function (event) {
    if (done) {
      return;
    }

    const letterData = event.key;

    userInputData(letterData);

    

    if (letterData === "Enter") {
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
      return;
    }

    if (guess.length !== MAX_LETTERS) {
      alert("5 letters please + thank you");
      currentRow = currentRow;
      return;
    }

//////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////

  if (guess.length === MAX_LETTERS)  {
    const promise = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: guess }),
    });
    const promiseProcessing = await promise.json();
    const wordStatus = await promiseProcessing.validWord;



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
      let obj = {};

      for (i = 0; i < array.length; i++) {
        let letter = array[i];
        if (obj[letter]) {
          obj[letter]++;
        } else {
          obj[letter] = 1;
        }
      }
      return obj;
    }


    const map = makeMap(answerParts);

    isCorrect();

    const guessParts = guess.split("");



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

        decor = currentRow;
        while (decor < 5) {
          boxes[(decor + 1) * MAX_LETTERS + c].innerHTML = "💎";
          decor++;
        }
      } else if (answerParts.includes(guessParts[c]) && map[guessParts[c]] > 0) {
        boxes[currentRow * MAX_LETTERS + c].classList.add("yellow");
        map[guess[c]]--;

        decor = currentRow;
        while (decor < 5) {
          boxes[(decor + 1) * MAX_LETTERS + c].innerHTML = "🧬";
          decor++;
        }
      } else {
        boxes[currentRow * MAX_LETTERS + c].classList.add("gray");
      }
    }
  }
    
    guess = "";
    currentRow++;

    if (currentRow === maxRows) {
      if (done) {
        return;
      }
      window.location.href = "./+M-J-W+.html#word-game";
      alert(`THANKS FOR PLAYING THE GAME + the word was = ${answer}`);
      done = true;

    }

    
  } 

} 
else return;

  }

/////////////////////////////////////////////////////////////////////////////////////////////

  const submitWord = document.querySelectorAll("._c_Apple-Music-Video-submit");
  submitWord.forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "./+M-J-W+.html#word-game";
      if (done) {
        return;
      }

      if (guess.length !== MAX_LETTERS) {
        alert("5 letters please + thank you");
        return;
      }
      else commit();
    });
  });
  
/////////////////////////////////////////////////////////////////////////////////////////////

  const deleteWord = document.querySelectorAll("._c_Apple-Music-Video-delete");
  deleteWord.forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "./+M-J-W+.html#word-game";
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

/////////////////////////////////////////////////////////////////////////////////////////////
const alphabetButtons = document.querySelectorAll("._c_Apple-Music-Video-alphabet-buttons");

function handleButtonClick(event) {
  if (done) {
    return;
  }
  const value = event.target.innerText;
  userInputData(value);
  window.location.href = "./+M-J-W+.html#word-game";
}

// Add click event listeners to all alphabet buttons
alphabetButtons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});


/////////////////////////////////////////////////////////////////////////////////////////////

const numberButtons = document.querySelectorAll("._c_Apple-Music-Video-numbers");

function handleNumberButtonClick(event) {
  window.location.href = "./+M-J-W+.html#_id_web-development";
}

// Add click event listeners to all number buttons
numberButtons.forEach(button => {
  button.addEventListener("click", handleNumberButtonClick);
});


/////////////////////////////////////////////////////////////////////////////////////////////


}


valueINIT().catch(() => {
  const answerDiv = document.querySelector(".answer-div");
  if (answerDiv) answerDiv.textContent = "Word game is offline right now, please try again later.";
});




