
let calculation = localStorage.getItem('calculation') || '';
    
forDisplay();

function updateCalculation(number) {
  calculation += number;
  forDisplay();

  localStorage.setItem('calculation', calculation);
}

function forDisplay() {
  const display = document.querySelector('.js-display').innerHTML = calculation;
}
