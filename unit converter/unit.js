const inputValue = document.getElementById('inputValue');
const unit = document.getElementById('unit');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function kilogramsToPounds(kg) {
    return kg * 2.20462;
}

function poundsToKilograms(pounds) {
    return pounds / 2.20462;
}

convertBtn.addEventListener('click', () => {
    const value = parseFloat(inputValue.value);
    if(isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    let convertedValue;
    switch(unit.value) {
        case 'Ctof':
            convertedValue = celsiusToFahrenheit(value);
            break;
        case 'FtoC':
            convertedValue = fahrenheitToCelsius(value);
            break;
        case 'kgtolb':
            convertedValue = kilogramsToPounds(value);
            break;
        case 'lbtokg':
            convertedValue = poundsToKilograms(value);
            break;
    }
    result.textContent = convertedValue.toFixed(2);
});