const buttonsNumbers = document.querySelectorAll('.data-number');
console.log(buttonsNumbers);
const buttonsOperate = document.querySelectorAll('.data-operator');
console.log(buttonsOperate);
const buttonEqual = document.querySelectorAll('.equal')[0];
console.log(buttonEqual);
const buttonDelete = document.querySelectorAll('.delete')[0];
console.log(buttonDelete);
var display = document.getElementById('display');
console.log(display);

var actualOperation = '';
var lastOperation = '';
var operation = undefined;

buttonsNumbers.forEach(function (button) {
    button.addEventListener('click', function () {
        addNumber(button.innerText);

    });
});

buttonsOperate.forEach(function (button) {
    button.addEventListener('click', function () {
        selectOperation(button.innerText);

    })

});

buttonEqual.addEventListener('click', function () {
    calculate();
    updateDisplay();

});

buttonDelete.addEventListener('click', function () {
    clear();
    updateDisplay();
});

function selectOperation(op) {
    if (actualOperation === '') return;
    if (lastOperation !== '') {
        calculate()
    }
    operation = op.toString();
    lastOperation = actualOperation;
    actualOperation = '';

}

function calculate() {
    var calculation;
    const last = parseFloat(lastOperation);
    const actual = parseFloat(actualOperation);
    if (isNaN(last) || isNaN(actual)) return;
    switch (operation) {
        case '+':
            calculation = last + actual;
            break;
        case '-':
            calculation = last - actual;
            break;
        case 'x':
            calculation = last * actual;
            break;
        case '/':
            calculation = last / actual;
            break;

        default:
            return;

    }
    actualOperation = calculation;
    operation = undefined;
    lastOperation = '';

}

function addNumber(num) {
    actualOperation = actualOperation.toString() + num.toString();
    updateDisplay();
}

function clear() {
    actualOperation = '';
    lastOperation = '';
    operation = undefined;
}

function updateDisplay() {
    display.value = actualOperation;
}

clear();
























// const displayLastValue = document.getElementById('last-value');
// const displayActualValue = document.getElementById('actual-value');
// const buttonsNumbers = document.querySelectorAll('.data-number');
// const buttonsOperations = document.querySelectorAll('.operator');
// const display = new Display(displayLastValue, displayActualValue);

// buttonsNumbers.forEach(button => {
//     button.addEventListener('click', () => display.addNumber(button.innerHTML));

// });

// buttonsOperations.forEach(button => {
//     button.addEventListener('click', () => display.compute(button.value));
// })