let currentInput = "0";
let previousInput = "";
let operation = null;
let resetInput = false;

const result = document.getElementById("result");

result.textContent = currentInput;
function updateDisplay() {
  result.textContent = currentInput;
}
function appendNumber(number) {
  if (currentInput === "0" || resetInput) {
    currentInput = number;
    resetInput = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}
function appendDecimal() {
  if (resetInput) {
    currentInput = "0.";
    resetInput = false;
  } else if (!currentInput.includes(".")) {
    currentInput += ".";
  }
  updateDisplay();
}
function clearDisplay() {
  currentInput = "0";
  previousInput = "";
  operation = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}
function appendPercentage() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}
function appendOperator(op) {
  if (operation !== null) calculate();
  previousInput = currentInput;
  operation = op;
  resetInput = true;
}
function calculate() {
  let computation;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
      default:
        result;
  }
  currentInput = computation.toString()
  operation = null
  resetInput = true
  updateDisplay()
}

updateDisplay()