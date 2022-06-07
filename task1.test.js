const stringSize = require('./task1');

describe('task 1', function() {

    test('count kevin = 5', () => {
    expect(stringSize('Kevin')).toBe(5);
    } )

    test('long text', () => {
        expect(stringSize('ici ceci doit retourner faux')).toThrow(Error);
    } )

    test('long text', () => {
        expect(stringSize('')).toThrow(Error)
    } )


    test('Return character counts of Developer', () => {
        expect(stringSize('Developer')).toBe(9);
      });

})

