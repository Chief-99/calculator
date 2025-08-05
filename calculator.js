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

firstNumber = 12;
secondNumber = 4;
operator = '+';
console.log(operate(operator, firstNumber, secondNumber));