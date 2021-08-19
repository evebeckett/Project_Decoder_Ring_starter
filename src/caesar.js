const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    //if you are decoding, take the opposite value and follow the encode sequence below.
    if (!encode) {shift = -shift};
    //if shift is not present, 0, greater than 25, or less than -25, return false
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    };
    //if shift is equal to an empty string, return false
    if (input === '') {
      return false;
    };
   //if input is not a string, return false
    if (typeof(input) !== "string") {
      return false;
    };
    //if no shift, return false
    if (!shift) {
      return false;
    };
   //converts everything to lowercase and split into an array with each character as a separate element in the array;
    let inputArray = input.toLowerCase().split('');
  //creates a new array to store values
    let newArray = [];
    //for every element in the array. . .
        newArray = inputArray.map(ltr => {
         //find the charcode value of the character
         let value = ltr.charCodeAt(0); 
        //if the value is not a letter, return the letter to newArray.
        if (value < 97 || value > 122) {
          return String.fromCharCode(value);
        //Otherwise, find the new character value
        } else { 
          let newValue = value + shift;
        let newLtr = '';
        //if the new value is greater than 122 (not a letter), then wrap around to the beginning of the alphabet and continue counting.  Add the result to the array.
        if (newValue > 122) {
          newLtr = String.fromCharCode(newValue - 26);
          return newLtr;
        
        //if the new value is less than 97(not a letter), then wrap around to the end of the alphabet and continue counting.  Add the result to the array.
        } else if (newValue < 97) {
          newLtr = String.fromCharCode(newValue + 26);
          return newLtr;  
        }else {
          return String.fromCharCode(newValue);
        };    
       };
     });
    //join the new array to create a string, which is returned.
     return newArray.join('');

    
};
    
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
