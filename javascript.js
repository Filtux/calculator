function add(a, b) {
    return Number(a) + Number(b);
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

function operate(operator, a, b) {

    if (operator == '+') {
        console.log('adding')
        return add(a, b);
    }
    if (operator == '-') {
        console.log('subtract')
        return subtract(a, b);
    }
    if (operator == 'x') {
        console.log('times')
        return multiply(a, b);
    }
    if (operator == '/') {
        console.log('divide')
        return divide(a, b);
    }
}

let equalsButton = document.querySelector('#equals')
let addButton = document.querySelector('#add')
let subtractButton = document.querySelector('#subtract')
let multiplyButton = document.querySelector('#multiply')
let divideButton = document.querySelector('#divide')
let clearButton = document.querySelector('#clear')
let calcDisplay = document.querySelector('.calcDisplay')

let numberButtons = document.querySelectorAll('.digit')
let operatorButtons = document.querySelectorAll('.operator')

zeroButton = document.querySelector('#digit0')
oneButton = document.querySelector('#digit1')
twoButton = document.querySelector('#digit2')
threeButton = document.querySelector('#digit3')
fourButton = document.querySelector('#digit4')
fiveButton = document.querySelector('#digit5')
sixButton = document.querySelector('#digit6')
sevenButton = document.querySelector('#digit7')
eightButton = document.querySelector('#digit8')
nineButton = document.querySelector('#digit9')

numberButtons.forEach((button) =>
    button.addEventListener('click', () => writeNumberToScreen(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => writeOperatorToScreen(button.textContent))
)

clearButton.addEventListener('click', clearScreen)
equalsButton.addEventListener('click', performCalculation)


function writeNumberToScreen(number) {
    if (calcDisplay.textContent === '0') {
        calcDisplay.textContent = ''
    }
    if (calcDisplay.textContent.includes('+') || calcDisplay.textContent.includes('-')
        || calcDisplay.textContent.includes('x') || calcDisplay.textContent.includes('/')) {
        console.log("detected operand")
        secondOperand += number
    }
    calcDisplay.textContent += number;
    console.log(calcDisplay.textContent)
}

function writeOperatorToScreen(operator) {
    firstOperand = calcDisplay.textContent
    operatorIs = operator

    calcDisplay.textContent += ' ' + operator + ' ';
    console.log(calcDisplay.textContent)
}

function clearScreen() {
    calcDisplay.textContent = 0
    firstOperand = ''
    secondOperand = ''
}

function performCalculation() {
    console.log('first operand is: ' + firstOperand)
    console.log('operator is: ' + operatorIs)
    console.log('second operand is: ' + secondOperand)
    calcDisplay.textContent = operate(operatorIs, firstOperand, secondOperand)
}


currentDisplayString = calcDisplay.textContent
firstOperand = ''
operatorIs = ''
secondOperand = ''


console.log(currentDisplayString)