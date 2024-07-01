let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value) {

    if (isNaN(value)) {
        //this is not a number
        handleSymbol(value);
    }
    else {
        //this is a number
        handleNumber(value);
    }
    screen.innerText = buffer;
    console.log('runningTotal', runningTotal)
    console.log('buffer', buffer)
    console.log('previousOperator', previousOperator)
}

function handleSymbol(symbol) {
    console.log('symbol', symbol);
    switch (symbol) {
        case 'C': {
            buffer = '0';
            runningTotal = 0;
            let previousOperator;
            break;
        }
        case '=':
            if (previousOperator === 'null') {
                //need two numbers to do math
                return;
            }
            else {
                flushOperation(parseInt(buffer));
            }
            previousOperator = 'null';
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
                break;
            }
            else {
                buffer = buffer.substring(0, buffer.length - 1);
                break;
            }
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }

}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer)

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    }
    else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    switch (previousOperator) {
        case '+': {
            runningTotal += intBuffer;
        }
            break;
        case '-': {
            runningTotal -= intBuffer;
        }
            break;
        case '×': {
            runningTotal *= intBuffer;
        }
            break;
        case '÷': { runningTotal /= intBuffer; }
            break;


    }
}



function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;


    }
}



function valueInit() {

    const screen = document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {

            buttonClick(event.target.innerText);
        });
}
valueInit();