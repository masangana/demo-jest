const calculator = require('./task3');

describe('Add function', function() {

    test('7 + 2 = 9', () => {
        calculate = new calculator
        expect(calculate.add(7,2)).toBe(9);
    } )

    test('7 + (-2)', () => {
        calculate = new calculator
        expect(calculate.add(7,-2)).toBe(5);
    } )

    test('(-7) + (-2)', () => {
        calculate = new calculator
        expect(calculate.add(-7,-2)).toBe(-9);
    } )

    test('(-7) + (2)', () => {
        calculate = new calculator
        expect(calculate.add(-7,2)).toBe(-5);
    } )
})

describe('subtract function', function() {

    test('7 - 2 = 9', () => {
        calculate = new calculator
        expect(calculate.subtract(7,2)).toBe(5);
    } )

    test('7 - (-2)', () => {
        calculate = new calculator
        expect(calculate.subtract(7,-2)).toBe(9);
    } )

    test('(-7) - (-2)', () => {
        calculate = new calculator
        expect(calculate.subtract(-7,-2)).toBe(-5);
    } )

    test('(-7) - (2)', () => {
        calculate = new calculator
        expect(calculate.subtract(-7,2)).toBe(-9);
    } )
})

describe('divide function', function() {

    test('6 / 2 = 9', () => {
        calculate = new calculator
        expect(calculate.divide(6,2)).toBe(3);
    } )

    test('6 / (-2)', () => {
        calculate = new calculator
        expect(calculate.divide(6,-2)).toBe(-3);
    } )

    test('(-6) / (-2)', () => {
        calculate = new calculator
        expect(calculate.divide(-6,-2)).toBe(3);
    } )

    test('(-6) / (2)', () => {
        calculate = new calculator
        expect(calculate.divide(-6,2)).toBe(-3);
    } )
})

describe('multiply function', function() {

    test('7 * 2 = 9', () => {
        calculate = new calculator
        expect(calculate.multiply(7,2)).toBe(14);
    } )

    test('7 * (-2)', () => {
        calculate = new calculator
        expect(calculate.multiply(7,-2)).toBe(-14);
    } )

    test('(-7) * (-2)', () => {
        calculate = new calculator
        expect(calculate.multiply(-7,-2)).toBe(14);
    } )

    test('(-7) * (2)', () => {
        calculate = new calculator
        expect(calculate.multiply(-7,2)).toBe(-14);
    } )
})