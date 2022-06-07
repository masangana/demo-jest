
stringSize = (str = new string) => {
        return (str.length<11 && str.length>1 ? str.length : Error('wrong size'))  }

//console.log(stringSize('kevin'))
//console.log(stringSize('ici ceci doit retourner faux'))
module.exports = stringSize;