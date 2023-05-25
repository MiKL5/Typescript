// how to convert to degrees Fahrenheit
const conversion = (celsius: number) => {
    return (celsius * 9 / 5) + 32;
}

// Instructions
alert("Bonjour !\nPour convertir une température en degrés Celsius  en degrés Fahrenheit, \nsaisissez un chiffre ou un nombre (entier ou flottant).");
do {
    // Ask the temperature in degrees Celsius
    const tempCelsius: number  = parseFloat(prompt("Saisissez une température en degrés Celsius pour la convertir en degrés Fahrenheit.\nLes nombres flottants sont admis."));
    // Verifying
    if (isNaN(tempCelsius)) {
        // Error message
        alert("La saisie est invalide. saisissez un chiffre ou un nombre (entier ou flottant).");
    }
} while (isNaN(tempCelsius));
// Conversion
const tempFahrenheit = conversion(tempCelsius);
// Result
alert(`La température est ${tempFahrenheit} °F.`);