// Import functions 
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test for Euro to Dollar conversion
test('Converts 1 Euro to 1.07 Dollars', () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

// Test for Dollar to Yen conversion
test('Converts 1 Dollar to Yens', () => {
    // 1 Dollar should be about 146.26 Yen (156.5 / 1.07)
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});

// Test for Yen to Pound conversion
test('Converts 156.5 Yens to Pounds', () => {
    // 156.5 Yens should be 0.87 Pounds (1 Euro to Yen, then Euro to Pound)
    expect(fromYenToPound(156.5)).toBe(0.87);
});