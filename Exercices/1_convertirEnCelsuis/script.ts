// how to convert to degrees Fahrenheit
const conversion = (celsius: number) => {
    return (celsius * 9 / 5) + 32;
}
// instructions
alert("Bonjour !\nPour convertir une température en degrés Celsius  en degrés Fahrenheit, \nsaisissez un chiffre ou nombre entier ou un nombre flottant.");
// Ask the temperature in degrees Celsius
const tempCelsius: number  = parseFloat(prompt("Saisissez une température en degrés Celsius pour la convertir en degrés Fahrenheit."));
if (isNaN(tempCelsius)){
    // Remember instructions
    alert("Saisissez une température en degrés Celsius \npour la convertir en degrés Fahrenheit. \nSeul les chiffres ou nombre entiers ou flottants sont acceptés");
    // Ask the temperature in degrees Celsius
    const tempCelsius: number  = parseFloat(prompt("Saisissez une température en degrés Celsius pour la convertir en degrés Fahrenheit."));
    // Conversion
    const tempFahrenheit = conversion(tempCelsius);
    // Result
    alert(`La température en degrés Fahrenheit est ${tempFahrenheit}`);
} else {
    // Conversion
    const tempFahrenheit = conversion(tempCelsius);
    // Result
    alert(`La température en degrés Fahrenheit est ${tempFahrenheit}`);
}