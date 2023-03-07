let decoder = (encryptedWord) => {
    let charArray = encryptedWord.split('');
    let increment = +charArray[0];
    let decodedWord = '';

    for (let i = 1; i < charArray.length; i++) {
        let charCode = charArray[i].charCodeAt(0);
        charCode += increment;
        let newChar = String.fromCharCode(charCode);

        decodedWord += newChar;

    }
    return decodedWord;

}

 console.log(decoder('2fcjjm'));
