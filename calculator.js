const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.getElementById('equals-button');
const display = document.getElementById('display');
const clearButton = document.getElementById('clear-button');
let firstNumber;
let operator;
let secondNumber;

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
    operator = target.textContent;
    firstNumber = Number(display.value);
    target.classList.add('active-operator');
    
}

function finishOperation() {
    secondNumber = Number(display.value);
    let result = operate(operator, firstNumber, secondNumber);
    display.value = result;
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

function populateDisplay(event) {
    let number = event.target.textContent;
    display.value += number;
}

function clearDisplay() {
    display.value = '';
}

numberButtons.forEach((button) => {
    button.addEventListener('click', populateDisplay)
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', continueOperation)
});
equalsButton.addEventListener('click', finishOperation);
clearButton.addEventListener('click', clearDisplay);