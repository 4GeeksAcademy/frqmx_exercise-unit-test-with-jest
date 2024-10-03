// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// From Euro to Dollar
const fromEuroToDollar = (euroAmount) => {
    return euroAmount * oneEuroIs.USD;
};
// From Dollar to Yen
const fromDollarToYen = (dollarAmount) => {
    // First convert Dollar to Euro, then Euro to Yen
    let euroAmount = dollarAmount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
};
// From Yen to Pound
const fromYenToPound = (yenAmount) => {
    // First convert Yen to Euro, then Euro to Pound
    let euroAmount = yenAmount / oneEuroIs.JPY;
    return euroAmount * oneEuroIs.GBP;
};

// Export the functions for testing
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };