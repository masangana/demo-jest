
stringSize = (str = new string) => (str.length<11 && str.length>1 ? str.length : Error('wrong size'))
module.exports = stringSize;