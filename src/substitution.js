
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //if no alphabet, return false
    if (alphabet === undefined) {
      return false;
    } 
    //if the alphabet is less than 26 characters, return false
    if (alphabet.length !== 26) {
      return false;
    }
    //if alphabet does not contain 26 unique characters, return false
    let newStr = [];
    for(let i = 0; i < alphabet.length; i++) {
       for(let j = i + 1; j < alphabet.length; j++) {
          if (alphabet[i] == alphabet[j])
             return false;
       }
    }
    //ignore capitalization
    let newInput = input.toLowerCase();
    //create an object that assigns each letter of the input alphabet to the actual alphabet in order.
    let cipherAlphabet = {};
    let alphabetArray = alphabet.split('');
    for (let i = 0; i < alphabetArray.length; i++) {
      const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t','u','v', 'w', 'x', 'y', 'z'] ;
      const values = alphabet;
      keys.forEach((key, i) => cipherAlphabet[key] = values[i]);
    }
    //if encoding. . .
     if (encode) {
      //loop through the characters in the newInput string (input string in lowercase) and replace each character with the corresponding coded character.  Push each character into an array.
      for (let i = 0; i < newInput.length; i++) {
        let newChar = newInput[i];
        if (newChar.match(/[a-z]/i)) {
          newChar = cipherAlphabet[newInput[i]];
          newStr.push(newChar);
        } 
        //if the character being encoded is not a letter, push the character into the array
        else {
          newStr.push(newChar);
        }
      }
       //join the characters together to make a string and return it.
      return newStr.join("");
  }
    //if decoding. . .
    else {
      let charArr = [];
      //loop through each lowercased character
      for (let i = 0; i < newInput.length; i++) {
        let newChar = newInput[i]
      //if the character is a space, push it into the charArr.
      if (newChar=== ' '){
       charArr.push(newChar)
      } 
       //otherwise find the key associated with the value specified in the object.  Push the key into an array.
       else {
         charArr.push(
              Object.keys(cipherAlphabet).find(
                (key) => cipherAlphabet[key] === newChar)
         );
        }
      }
      //join the characters to create a string to be returned.
      return charArr.join("");
    }      
      
 }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
