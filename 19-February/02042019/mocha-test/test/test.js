// var assert = chai.assert;
let disemvowel = require('../disemvowel');

// describe('Vowels', function() {

//   it('should return false if there are vowels', function() {
//     assert.equal(/[aeiou]/gi);
//   });

// });

let expect = require("chai").expect;

describe("Disemvowel", function() {
  describe("Working Scenarios", function() {
    it("Should remove vowels from the srting that is passed", function() {
      expect(disemvowel("together")).to.equal("tgthr");
    });
    it("should convert number into a string", function() {
      expect(disemvowel(5)).to.be.a("string");
    });
  });
  describe("Error Scenarios", function() {
    it("Should return an error is a boolean is passed", function() {
      expect(disemvowel(false)).to.throw(Error);
    });
  });
})