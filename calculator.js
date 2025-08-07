const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.getElementById('equals-button');
const display = document.getElementById('display');
const clearButton = document.getElementById('clear-button');
let firstNumber;
let operator;
let secondNumber;
const flags = {
    newOperation: true,
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
    }

    operator = target.textContent;
    firstNumber = Number(display.value);
    removeActiveClass();
    target.classList.add('active-operator');
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
    })
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', continueOperation)
});
equalsButton.addEventListener('click', finishOperation);
clearButton.addEventListener('click', clearDisplay);