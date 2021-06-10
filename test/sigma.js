const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Sigma", () => {
    it("Should return the sum of all positive integers up to given number", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.sigma(15);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(3);
    });
});