  let currentInput = '';
  let display = document.getElementById('display');
  
  function appenToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
  }

  function deleteLastInput() {
    if (currentInput.length > 0) {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    }
  }
  
  function clearDisplay() {
    currentInput = '';
    display.value = '';
  }
  
  function calculateResult() {
    try {
      const result = eval(currentInput);
      display.value = result;
      currentInput = result.toString();
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  


  
    