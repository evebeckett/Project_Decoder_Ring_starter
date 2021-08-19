const polybiusModule = function () {
  
  let alphabet = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };
function polybius(input, encode = true) {
//ignore capitalization
  let newInput = input.toLowerCase();
  let newStr = [];
  let wordsArr = [];
  //if encoding. . .
  if (encode) {
    //loop through lowercased string. . .
    for (let i = 0; i < newInput.length; i++) {
      //for each character, check to see whether the character is a letter.  If the character is a letter, find the numerical value assigned to the letter.
      let newChar = newInput[i];
      if (newChar.match(/[a-z]/i)) {
          newChar = alphabet[newInput[i]];
          newStr.push(newChar);
      }
      //if the character is not a letter, push the character into the string without making any conversion.
      else {
          newStr.push(newChar);
      };
    };
    //join the new string to create an encoded message.
      return newStr.join("");
  }
  //if decoding. . .
  else {
    //first check to verify that the length of all numbers combined is even 
    let lengthInput = input;
    let inputWithoutSpaces = lengthInput.split(' ').join('');
    if (inputWithoutSpaces.length % 2 !== 0){
      return false;
    };
   //split the characters into words
    let numWordsArray = input.split(" ");
    //for each word, split into individual characters, then push every two characters into their own array and join them to create a two digit number.  Push each two digit number into an array.
    numWordsArray.forEach((numWord) => {
      let charPositionsArr = [];
      let charArr = [];
      let digitsArray = numWord.split("");
      while (digitsArray.length > 0) {
        charPositionsArr.push(digitsArray.splice(0, 2).join(""));
      }
      //for each two digit number, if the number is 42, return i/j.  Otherwise find the key associated with the numerical value and push it into charArr
      charPositionsArr.forEach((charPosition) => {
        if (charPosition != "42") {
          charArr.push(
            Object.keys(alphabet).find(
                (key) => alphabet[key] === charPosition
              )
            )
        } 
        else {
          charArr.push("i/j");
        };
      });
      //join the array of letters into individual words
      wordsArr.push(charArr.join(""));
    });
      //join the words into a string with each word separated by a space.
      return wordsArr.join(" ");
  };
};



  return {
    polybius,
  };
}();

module.exports = { polybius: polybiusModule.polybius };
