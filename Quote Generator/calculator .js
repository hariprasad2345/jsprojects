let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  display.innerHTML = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerHTML = currentInput || '0';
}

function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
  display.innerHTML = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || previousInput === '') return;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
    default:
      return;
  }

  display.innerHTML = result;
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}
