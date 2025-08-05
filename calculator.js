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

let numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((button) => {
    button.addEventListener('click', populateDisplay)
})
clearButton.addEventListener('click',clearDisplay);