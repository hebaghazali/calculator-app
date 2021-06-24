const calculatorDisplay = document.getElementById('calculator-display');
const inputBtns = [...document.getElementById('calculator-buttons').children];
const resetBtn = document.getElementById('reset-btn');

const displayMaxLength = 12;
let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
  // Replace current display value if first value is entered
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    // If current display value is 0, replace it, if not add number to display value
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === '0' ? number : displayValue + number;
  }
  sliceNumbers();
}

function addDecimal() {
  // If operator pressed, don't add decimal
  if (awaitingNextValue) return;

  // If exceeded maximum length of display, don't add decimal
  if (calculatorDisplay.textContent.length === displayMaxLength) return;

  // If no decimal, add one
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

// Calculate first and second values depending on operator
const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

  '=': (firstNumber, secondNumber) => secondNumber,
};

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // Prevent multiple operators
  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }
  // Assign firstValue if no value
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    calculatorDisplay.textContent = calculation;
    firstValue = calculation;
    sliceNumbers();
  }
  // Ready for next value, store operator
  awaitingNextValue = true;
  operatorValue = operator;
}

function deleteNumber() {
  const calculatorDisplayArray = calculatorDisplay.textContent.split('');
  calculatorDisplayArray.pop();

  // 0 if it has one value (meaning not empty)
  if (calculatorDisplay.textContent.length === 1) {
    calculatorDisplay.textContent = '0';
    return;
  }

  calculatorDisplay.textContent = calculatorDisplayArray.join('');
}

function sliceNumbers() {
  calculatorDisplay.textContent = calculatorDisplay.textContent.slice(
    0,
    displayMaxLength
  );
}

// Add Event Listeners for numbers, operators, decimal
inputBtns.forEach(inputBtn => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  } else if (inputBtn.classList.contains('delete')) {
    inputBtn.addEventListener('click', () => deleteNumber());
  }
});

// Reset all values, display
function resetAll() {
  firstValue = 0;
  operatorValue = '';
  awaitingNextValue = false;
  calculatorDisplay.textContent = '0';
}

// Event Listener
resetBtn.addEventListener('click', resetAll);
