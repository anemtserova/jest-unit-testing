
const sum = (a,b) => {return a+b}
console.log(sum(7,4));

// module.exports = {sum};

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro*oneEuroIs['USD'];
}
const fromDollarToYen = (dollar) => {
    let toEuro = dollar/oneEuroIs['USD'];
    return toEuro*oneEuroIs["JPY"];
}
const fromYenToPound = (yen) => {
    let toEuro = yen/oneEuroIs['JPY'];
    return toEuro*oneEuroIs["GBP"];
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};