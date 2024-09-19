function convertFromCelsius() {
    let celsius = document.getElementById('celsius').value;
    document.getElementById('fahrenheit').value = (celsius * 9/5) + 32;
    document.getElementById('kelvin').value = parseFloat(celsius) + 273.15;
}

function convertFromFahrenheit() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    document.getElementById('celsius').value = (fahrenheit - 32) * 5/9;
    document.getElementById('kelvin').value = ((fahrenheit - 32) * 5/9) + 273.15;
}

function convertFromKelvin() {
    let kelvin = document.getElementById('kelvin').value;
    document.getElementById('celsius').value = kelvin - 273.15;
    document.getElementById('fahrenheit').value = (kelvin - 273.15) * 9/5 + 32;
}
