let expect = require("chai").expect;
let titleize = require("../titleize");

describe("Titleize", function() {
  it ("should capitalize the title and name", function() {
    expect(titleize("mr jones")).to.equal("Mr Jones");
  });
});