const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Factorial", () => {
    it("Should return the product (multiplication) of all positive integers from 1 up to given number", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.factorial(3);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(3);
    });
});