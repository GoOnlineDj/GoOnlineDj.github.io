let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".calculator-index-wrapper .screen");



function buttonClick(value) {
    debugger;
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);


    }
    else {
        // this is a number
        handleNumber(value);

    }

    screen.innerText = buffer;
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    }
    else {
        buffer += numberString;
    }

}

function handleSymbol(symbol) {
    console.log("symbol", symbol);
    switch (symbol) {

        case "C": // clear
            buffer = "0";
            runningTotal = 0;
            previousOperator = null;
            break;

        case "=":
            if (previousOperator === null) {
                // need two numbers to do math
                return;
            }
            flushOperation(+buffer);
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;

        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(symbol);
            break;

        case "←":

            if (buffer.length === 1) {
                buffer = "0";
            }
            else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
    }
}

function handleMath(symbol) {

    if (buffer === "0") {
        // do nothing //also conditional statement // check a condition at the beginning of a function
        return;
    }

    const intBuffer = +buffer;


    if (runningTotal === 0) {
        runningTotal = intBuffer;
    }
    else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = "0";

}

function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    }
    else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    }
    else if (previousOperator === "×") {
        runningTotal *= intBuffer;
    }
    else {
        runningTotal /= intBuffer;
    }

    console.log("stats", runningTotal, buffer, previousOperator);

}

// }
// 

//     

//         case "C":
//             buffer = "0";
//             runningTotal = 0;
//             previousOperator = null;
//             break;

//         case "+":
//         case "-":
//         case "×":
//         case "÷":
//             handleMath(symbol);

//             break;

//         case "=":
//             if (previousOperator === null) {
//                 //need two numbers to do math
//                 return;
//             }
//             flushOperation(+buffer);
//             previousOperator = null;
//             buffer = runningTotal;
//             break;



//     }

//     function handleMath(symbol) {

//         if (buffer === "0") {
//             //do nothing and return // Thank You Frontend Masters
//             return;
//         }

//         // const intBuffer = parseInt(buffer);
//         const intBuffer = +buffer;

//         if (runningTotal === 0) {
//             runningTotal = intBuffer;
//         }
//         else {
//             flushOperation(intBuffer);
//         }

//         previousOperator = symbol;
//         buffer = "0";

//     }
// }


// function flushOperation(intBuffer) {
//     if (previousOperator === "+") {
//         runningTotal += intBuffer;
//     }
//     else if (previousOperator === "-") {
//         runningTotal -= intBuffer;
//     }
//     else if (previousOperator === "×") {
//         runningTotal *= intBuffer;
//     }
//     else {
//         runningTotal /= intBuffer;
//     }

//     buffer = "0";
//     console.log(runningTotal, buffer, previousOperator);
//     screen.innerText = runningTotal;

// }


function valueInit() {
    document.querySelector(".calculator-index-wrapper .calc-buttons").addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
    });
}

valueInit();




















// const firstName = "Michael";
// const lastName = "Williams";

// const sentence = "hello" + " " + firstName + " " + lastName + " " + "How are you?";

// //console.log(sentence);


// // const frindsAtYourParty = 0;
// // while (frindsAtYourParty < 10) 
// // console.log("Bring more friends to the party!");
// // example of infinite loop

// // frindsAtYourParty = frindsAtYourParty + 1;
// //frindsAtYourParty += 1;
// //frindsAtYourParty++;

// for (let i = 0; i <= 10; i++) {
//     // console.log(i);
// }


// const me = {
//     name: {
//         first: "Michael",
//         middle: "Junior",
//         last: "Williams",
//     },
//     location: {
//         country: "USA",
//         city: "Union",
//         state: "NJ",
//         zipcode: "07083",
//     }
// };

// delete me.name.middle;
// delete me.location.country;

// //console.log({ me });

// //console.log(me.location.city);
// //console.table(me);

// //setTimeout(console.log("Hello"), 600000);

// const mjw = [
//     "Michael",
//     "Williams",
//     40,
//     true,
//     "Union",
//     "NJ",
//     "07083",
//     "USA",
//     { 1: "one", 2: "two", 3: "three" },
// ];

// //mjw.forEach((item, index) => console.table(item, index))  // forEach loop
// const howare = mjw.filter(s => s === "Williams"); // filter loop


// console.log(howare);

// mjw[8].sayhi = "Hello"; // add a key value pair to the object in the array
// //console.log(Object.keys(mjw[8])); // get the keys of the object in the array

// //console.table(mjw);
// //console.table(mjw[8]);
// //console.log(typeof "Michael");

// const return5 = function () {
//     return 5;
// }



// function getListOfNames(list) {
//     // list is an array of objects that looks like this
//     // { name: "Some Person", jobTitle: "Boss Person", age: 30 }
//     // return a list of all the workers' names
//     let ListOfNames = [];

//     for (let i = 0; i < list.length; i++) {
//         ListOfNames.push(list[i].name);
//     }
//     return ListOfNames;


//     const names = list.map(({ name }) => name);
// }


// console.log(return5());