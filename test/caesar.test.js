

const { caesar } = require("../src/caesar")
const { expect } = require("chai")

const input1 = "Eve Beckett is a software developer"
const input2 = "Eve Beckett's phone number starts with 615"

describe ("caesar", ()=> {
 
  it ("should return false if shift is 0", () => {
    const actual = caesar(input1, 0, true);
    expect(actual).to.be.false;
  })
  
  it ("should return false if shift is not provided", () => {
    const actual = caesar(input1, undefined, true);
    expect(actual).to.be.false;
  })
  
  it ("should return false if shift is less than -25", () => {
    const expected = false;
    const actual = caesar(input1, -30, true);
    expect(actual).to.equal(expected);
  })
  
  it ("should return false if shift is more than 25", () => {
    const expected = false;
    const actual = caesar(input1, 30, true);
    expect(actual).to.equal(expected);
  })
  
  it ("should return false if input is not a string", ()=> {
    const expected = false;
    const actual = caesar({input: "Eve Beckett"}, 4, true);
    expect(actual).to.equal(expected);
  })
  
  it ("should return false if input string is empty", ()=> {
    const expected = false;
    const actual = caesar('', 5, true);
    expect(actual).to.equal(expected);
  })
  
  it ("should maintain spaces and other non-alphabetic characters when encoding", () => {
   const expected = "jaj gjhpjyy'x umtsj szrgjw xyfwyx bnym 615";
   const actual = caesar(input2, 5, true);
   expect(actual).to.equal(expected);
  })
  
  it ("should maintain spaces and other non-alphabetic characters when decoding", () => {
    const expected = "eve beckett's phone number starts with 615!"
    const actual = caesar ("faf gjhpjyy'x umtsj szrgjw xyfwyx bnym 615!", 5, false)
  })
  
  it ("should ignore capital letters", () => {
    const expected = "jaj gjhpjyy'x umtsj szrgjw xyfwyx bnym 615";
    const actual = caesar(input2, 5, true);
    expect(actual).to.equal(expected);
  })
  
  it ('should handle shifts that go past the end of the alphabet when encoding.', () => {
      const expected = "abcde";
      const actual = caesar("vwxyz", 5, true);
      expect(actual).to.equal(expected);
      })
  
  it ('should handle shifts that go past the end of the alphabet when decoding.', () => {
      const expected = "vwxyz"
      const actual = caesar("abcde", 5, false);
      expect(actual).to.equal(expected);
      })
  
   it ("should allow for a negative shift when encoding", () => {
      const expected = 'vwxyzab';
      const actual = caesar("abcdefg", -5, true);
     expect(actual).to.equal(expected);
   })
   
   it ("should allow for a negative shift when decoding", () => {
      const expected = "abcdefg";
      const actual = caesar("vwxyzab", -5, false);
      expect(actual).to.equal(expected);
   })
  
   it ("should encode a message by shifting the value of each letter by the number value of the shift parameter", () => {
      const expected = "abcdefg";
      const actual = caesar("vwxyzab", -5, false)
      expect(actual).to.equal(expected);
   })
  })

