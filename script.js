function convertTemp() {
    let value = parseFloat(document.getElementById("tempValue").value);
    let unit = document.getElementById("unit").value;
    let result = "";

    if (isNaN(value)) {
        result = "Please enter valid number";
    } else if (unit === "C") {
        let f = (value * 9/5) + 32;
        let k = value + 273.15;
        result = `Fahrenheit: ${f.toFixed(2)} °F <br> Kelvin: ${k.toFixed(2)} K`;
    } else if (unit === "F") {
        let c = (value - 32) * 5/9;
        let k = c + 273.15;
        result = `Celsius: ${c.toFixed(2)} °C <br> Kelvin: ${k.toFixed(2)} K`;
    } else if (unit === "K") {
        let c = value - 273.15;
        let f = (c * 9/5) + 32;
        result = `Celsius: ${c.toFixed(2)} °C <br> Fahrenheit: ${f.toFixed(2)} °F`;
    }

    document.getElementById("output").innerHTML = result;
}