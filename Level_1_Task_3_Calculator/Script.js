let currentValue = '';

function appendValue(value) {
  currentValue += value;
  document.getElementById('display').value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  document.getElementById('display').value = currentValue;
}

function calculate() {
  try {
    const result = eval(currentValue);
    document.getElementById('display').value = result;
    currentValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
