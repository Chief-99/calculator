const display = document.getElementById('display');
let firstNumber;
let operator;
let secondNumber;

let numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => console.log(event.target.textContent))
})

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

