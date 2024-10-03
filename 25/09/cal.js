let display = document.getElementById('result');

function input(value) {
    if (display.value == "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteChar() {
    display.value = display.value.slice(0, -1) || '0';
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function calculate() {
    let expression = display.value
        .replace('Math.PI', 'Math.PI')
        .replace('Math.sqrt(', 'Math.sqrt(')
        .replace('^', '**');

    // Ensure the trigonometric functions are in radians
    function toRadians(degrees) {
    return degrees * (Math.PI / 180);
   }


    try {
        let result = eval(expression);
        display.value = result + "°"; // Append degree symbol
    } catch (error) {
        display.value = 'Error';
    }
}
