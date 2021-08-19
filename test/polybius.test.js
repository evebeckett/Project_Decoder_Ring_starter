const { polybius } = require("../src/polybius")
const { expect } = require("chai")

let input1 = "Eve Beckett is a writer"
let input2 = "511551 21513152514444 4234 11 252442445124"
let input3 = "511551 21513152514444 4234 11 25244244512"


describe ("polybius", ()=> {
  it ("should return a string when encoding", () => {
    const actual = polybius(input1, true);
    expect(actual).to.be.a("string")
  }) 
  
  it ("should return a string when decoding", ()=> {
    const actual = polybius("511551 21513152514444 4234 11 252442445124", false)
    expect(actual).to.be.a("string")
  });
      
  it ("when decoding, should return false if the number of characters in the input string (excluding spaces) is not even", () => {
    const expected = false
    const actual = polybius(input3, false)
     expect(actual).to.be.false;
  })
  
  it ("should maintain spaces throughout the message when encoding", () => {
    const expected = "511551 21513152514444 4234 11 252442445124"
    const actual = polybius(input1, true);
    expect(actual).to.equal(expected);
  }) 
  
  it ("should maintain spaces throughout the message when decoding", () => {
    const expected = "eve beckett i/js a wri/jter";
    const actual = polybius(input2, false);
    expect(actual).to.equal(expected);
  })
      
  it ("should ignore capital letters", () => {
    const expected =  "511551 21513152514444 4234 11 252442445124"
    const actual = polybius (input1, true);
    expect(actual).to.equal(expected);
  })
  
  it ("should show both 'I' and 'J' when decoding number 42", () => {
    const expected = "eve beckett i/js a wri/jter"
    const actual = polybius(input2, false);
    expect(actual).to.equal(expected);
  })
  
  it("should return 42 when encoding both i and j",() => {
    const expected = '4242';
    const actual = polybius("ij", true);
    expect(actual).to. equal(expected);
  })
  
  it ('should encode a message with two digit coordinates matching the polybius cipher', () => {
    const expected = "511551 21513152514444 4234 11 252442445124"
    const actual= polybius(input1, true);
    expect(actual).to.equal(expected);
  })
  
  it ("should decode a message created with two digit coordinates that match the polybius cipher", () => {
    const expected = "eve beckett i/js a wri/jter";
    const actual = polybius("511551 21513152514444 4234 11 252442445124", false);
    expect(actual).to.equal(expected);
  })
})

