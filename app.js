
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

console.log(fromEuroToDollar(1));

const fromDollarToYen = (dollar) => {
    let dollartoEuro = dollar/oneEuroIs['USD'];
    return dollartoEuro*oneEuroIs["JPY"];
}

console.log(fromDollarToYen(1));

const fromYenToPound = (yen) => {
    let yentoEuro = yen/oneEuroIs['JPY'];
    return yentoEuro*oneEuroIs["GBP"];
}

console.log(fromYenToPound(1));


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};