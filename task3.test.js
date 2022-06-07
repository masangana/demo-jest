const calculator = require('./task3');

describe('Add function', function() {

    test('8+2 = 10', () => {
        calculate(8,2) = new calculator
        expect(calculate.add()).toBe(10);
    } )

    test('7 + (-2)', () => {
        calculate(7,-2) = new calculator
        expect(calculate.add()).toBe(5);
    } )

})