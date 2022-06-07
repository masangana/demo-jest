

uppercaseString = (value) => (typeof value === 'string' ? value.toLocaleUpperCase() : Error('Wrong type'))

module.exports = uppercaseString;