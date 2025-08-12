const numberButtons = document.querySelectorAll('.number-button');
const decimalButton = document.getElementById('decimal-point');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.getElementById('equals-button');
const display = document.getElementById('display');
const clearButton = document.getElementById('clear-button');
let firstNumber;
let operator;
let secondNumber;
let holdingValue;
const flags = {
    newOperation: true,
    firstPair: false,
}

function operate(operator, first, second) {
    let result;
    switch (operator) {
        case '+':
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case '*':
            result = multiply(first, second);
            break;
        case '/':
            result = divide(first, second);
            break;
    }

    return result;
}

function continueOperation(event) {
    let target = event.target;

    if (firstNumber) {
        secondNumber = Number(display.value);
        if (divisionByZero()) {
            return;
        }
        display.value = Math.round(operate(operator, firstNumber, secondNumber) * 100) / 100;
        firstNumber = undefined;
    }

    operator = target.textContent;
    holdingValue = Number(display.value);
    removeActiveClass();
    target.classList.add('active-operator');
    enableOperator();
    target.disabled = true;
}

function finishOperation() {
    secondNumber = Number(display.value);
    if (divisionByZero()) {
        return;
    }
    let result = Math.round(operate(operator, firstNumber, secondNumber).toFixed(2) * 100) / 100;
    display.value = result;
    firstNumber = undefined;
    secondNumber = undefined;
    flags.newOperation = true;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function clearDisplay() {
    display.value = '';
    removeActiveClass();
    enableOperator();
}

function removeActiveClass() {
    operatorButtons.forEach((button) => button.classList.remove('active-operator'));
}

function testActiveClass() {
    operatorButtons.forEach((button) => {
        if (button.classList.contains('active-operator')) {
            clearDisplay();
        }
    })
}

function divisionByZero() {
    if (secondNumber === 0 && operator === '/') {
        alert('Error! You cannot divide by zero.');
        clearDisplay();
        firstNumber = undefined;
        secondNumber = undefined;
        flags.newOperation = true;
        return true;
    } else {
        return false;
    }
}

function enableOperator() {
    operatorButtons.forEach((button) => button.disabled = false);
}

function addDecimal() {
    if (display.value.includes('.')) {
        return;
    } else {
        display.value += '.';
    }
}

function deleteCharacters(event) {
    let key = event.key;
    
    if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
}

numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let number = event.target.textContent;
        if (flags.newOperation) {
            flags.newOperation = false;
            clearDisplay();
        }

        testActiveClass();
        display.value += number;
        removeActiveClass();
        if (holdingValue) {
            firstNumber = holdingValue;
            holdingValue = undefined;
        }
    })
});
decimalButton.addEventListener('click', addDecimal);
operatorButtons.forEach((button) => {
    button.addEventListener('click', continueOperation)
});
equalsButton.addEventListener('click', finishOperation);
clearButton.addEventListener('click', clearDisplay);
document.addEventListener('keydown', deleteCharacters);