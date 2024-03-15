let display = document.getElementById('display');
let currentInput = '0';

function appendNumber(num) {
  if (currentInput === '0') {
    currentInput = num.toString();
  } else {
    currentInput += num.toString();
  }
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}
var historyList = []; // Array to store calculation history



function reset() {
  currentInput = '0';
  updateDisplay();
}
function calculatePercentage() {
  try {
    currentInput = (eval(currentInput) / 100).toString();
    updateDisplay();
  } catch (error) {
    display.value = 'Error';
    setTimeout(reset, 1000);
  }
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    currentInput = '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    display.value = 'Error';
    setTimeout(reset, 1000);
  }
}

function updateDisplay() {
  display.value = currentInput;
}

