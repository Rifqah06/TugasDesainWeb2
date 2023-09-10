let currentInput = '';
let operator = '';
let firstNumber = null;

function appendToDisplay(value) {
    if (value === '.' && currentInput.includes('.')) {
        return;
    }
    currentInput += value;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstNumber = null;
    updateDisplay('0');
}

function performOperation(op) {
    if (currentInput !== '') {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
            currentInput = '';
        } else {
            calculateResult();
        }
        operator = op;
    }
}

function calculateResult() {
    if (operator !== '' && currentInput !== '') {
        const secondNumber = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    updateDisplay('Error');
                    return;
                }
                break;
        }
        updateDisplay(result);
        firstNumber = result;
        currentInput = '';
        operator = '';
    }
}

clearDisplay();
