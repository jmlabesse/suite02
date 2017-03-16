/*

    Thermometer

    Write a function "randomTemperatur" that return a temperature in Celsius or in Farenheight

    This function take one parameter that can be:
    
    "c" if we want to have a celsius value
    "f" if we want to have a farenheight value

    The number to calcul is a generated random number.
    You must create this random number.
    
    You must convert this generated number to the requested unit.
    So if I ask you to convert to Celsius, consider that the generated number is in Fahrenheit.

    Write your own tests !
    
*/

// write your code below this comment
function celsiusToFahrenheit(tempCelsius) {
    var tempFahrenheit = (tempCelsius * 1.8 + 32).toFixed(0);
    return tempFahrenheit;
}
function fahrenheitToCelsius(tempFahrenheit) {
    var tempCelsius = ((tempFahrenheit - 32) / 1.8).toFixed(0);
    return tempCelsius;
}

function randomTemperatur(unit) {
    var tempRandom = Math.floor(Math.random() * 100);
    if (unit === "c") {
        return "Température aléatoire = " + tempRandom + "°F  ==>  " + fahrenheitToCelsius(tempRandom) + " °C";
    } else if (unit === "f") {
        return "Température aléatoire = " + tempRandom + "°C  ==>  " + celsiusToFahrenheit(tempRandom) + " °F";
    } else {
        return "Unité inconnue !";
    }
}

console.log(randomTemperatur("c"));
console.log(randomTemperatur("f"));