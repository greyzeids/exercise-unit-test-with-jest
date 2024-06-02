let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}

console.log(fromEuroToDollar(1))


const fromDollarToYen = function(valueInDolar) {

    let valueInEuro = valueInDolar / oneEuroIs["USD"];

    let valueInYen = valueInEuro * oneEuroIs["JPY"];

    return valueInYen;

}

console.log(fromDollarToYen(1))


const fromYenToPound = function(valueInYen) {

    let valueInEuro = valueInYen / oneEuroIs["JPY"];

    let valueInPound = valueInEuro * oneEuroIs["GBP"];

    return valueInPound;
}

console.log(fromYenToPound(1))

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen};

