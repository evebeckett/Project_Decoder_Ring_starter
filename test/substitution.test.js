const { substitution } = require("../src/substitution")
const { expect } = require("chai")

let substitutionAlphabet= '.abcdgfehijklonmpqrstuvwxy'
let almostSubstitutionAlphabet =  '.adgfehijklonmpqrstuvwxy'
let repeatingSubstitutionAlphabet= '.abcdgfehijklonmpqrstuuwxy'
let input1= "Eve Beckett is a software engineer"
let input2= "dud adbjdss hr . rngsv.qd dofhoddq"

describe ("substitution", ()=> {
  it ("should encode a message by using the given substitution alphabet", ()=> {
    const expected = input2
    const actual = substitution(input1, substitutionAlphabet, true)
    expect(actual).to.equal(expected);
  });
  
  it ("should return false if the substitution alphabet is missing", ()=> {
    const expected = false;
    const actual = substitution(input1, true)
    expect(actual).to.be.false;
  })

  it ("should return false if the substitution alphabet is not exactly 26 characters", ()=> {
      const expected = false
      const actual = substitution(input1, almostSubstitutionAlphabet, true)
      expect(actual).to.be.false;
  })
  
  it ("Should return false if the substitution alphabet does not contain unique characters", ()=> {
      const expected = false
      const actual = substitution(input1, repeatingSubstitutionAlphabet, true)
      expect(actual).to.be.false;
  })
   it ("should work with any kind of key with unique characters when encoding", ()=> {
      const expected = input2;
      const actual = substitution(input1, substitutionAlphabet, true)
      expect(actual).to.equal(expected);
   })
  
   it ("should preserve spaces when encoding", ()=> {
      const expected = input2
      const actual = substitution(input1, substitutionAlphabet, true)
      expect(actual).to.equal(expected);
   })
   it ("should decode a message by using the given substitution alphabet", ()=> {
      const expected = "eve beckett is a software engineer"
      const actual = substitution(input2, substitutionAlphabet, false)
      expect(actual).to.equal(expected);
   })
   it ("should work with any kind of key with unique characters when decoding", ()=> {
      const expected = 'eve beckett is a software engineer'
      const actual = substitution(input2, substitutionAlphabet, false)
      expect(actual).to.equal(expected);
   })
   it ("should preserve spaces when decoding", ()=> {
      const expected = 'eve beckett is a software engineer'
      const actual = substitution(input2, substitutionAlphabet, false)
      expect(actual).to.equal(expected);
   })
})
