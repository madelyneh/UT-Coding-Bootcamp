var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here
describe("Tax Calculation", function() {
  it("Should calculate tax", function() {
    expect(calculateTax(4)).to.equal(4.32)
  });
});