const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value >= '0' && value <= '9') {
      currentInput += value;
      display.value = currentInput;
    } else if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.value = '';
    } else if (value === '=') {
      if (operator && currentInput && previousInput) {
        currentInput = eval(`${previousInput}${operator}${currentInput}`);
        display.value = currentInput;
        previousInput = '';
        operator = '';
      }
    } else {
      if (currentInput === '') return;
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    }
  });
});
