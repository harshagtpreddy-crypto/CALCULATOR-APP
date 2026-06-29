const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
let isMaximized = false;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => { display.value = ''; }, 1500);
    }
}

function minimizeCalc() {
    calculator.classList.toggle('minimized');
}

function maximizeCalc() {
    isMaximized = !isMaximized;
    calculator.classList.toggle('maximized');
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9' || e.key === '.') appendToDisplay(e.key);
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') appendToDisplay(e.key);
    if (e.key === 'Enter') calculate();
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
});