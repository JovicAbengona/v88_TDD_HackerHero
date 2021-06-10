const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Return Sum", () => {
    it("Should return the sum of the two numbers passed as arguments", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.return_sum(2, 1);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(3);
    });
});