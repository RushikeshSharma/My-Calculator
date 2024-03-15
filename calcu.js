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
  var displayValue = document.getElementById('display').value;

 
  var number = parseFloat(displayValue);

  
  var percentage = number / 100;

  
  document.getElementById('display').value = percentage;
}
function openEngineeringCalculator() {
 
  document.getElementById('engineering-calculator').style.display = 'block';
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
function calculate214() {
  var displayValue = document.getElementById('display').value;
  var result = eval(displayValue); // Evaluate the expression

  // Add the calculation and result to the history
  addToHistory(displayValue + ' = ' + result);

  // Display the result (you might want to update your calculator interface to handle this)
  console.log(result);
}
function showHistory() {
  var historyDisplay = document.getElementById('history-display');
  historyDisplay.innerHTML = ''; // Clear previous content

  for (var i = 0; i < historyList.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = historyList[i];
      historyDisplay.appendChild(listItem);
  }
}
