const reverseString = require('./task2');

describe('task 2', function() {

    test('reverse string', () => {
    expect(reverseString('kevin et alex')).toMatch('xela te nivek');
    } )

    test('long text', () => {
        expect(reverseString('nivek')).toMatch('kevin');
    } )

})

