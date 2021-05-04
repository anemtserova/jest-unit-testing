const { sum } = require('./app.js');


test('adds 14 + 9 to equals 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.58333333333335 yen", function() {
    const {fromDollarToYen} = require("./app.js");
    const yen = fromDollarToYen(10);
    const expected = 10*106.58333333333335;
    expect(expected).toBe(yen);
})
test("One yen should be 0.006254886630179828 pounds", function() {
    const {fromYenToPound} = require("./app.js");
    const pounds = fromYenToPound(1000);
    const expected = 1000*0.006254886630179828;
    expect(expected).toBe(pounds);
})