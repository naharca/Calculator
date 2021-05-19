const displayLastValue = document.getElementById('last-value');
const displayActualValue = document.getElementById('actual-value');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperations = document.querySelectorAll('.operator');
const display = new Display(displayLastValue, displayActualValue);

buttonsNumbers.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));

});

buttonsOperations.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value));
})