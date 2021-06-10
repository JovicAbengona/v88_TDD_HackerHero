const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Threes Fives", () => {
    it("Should add values from 1 and given num if that value is not divisible by 3 or 5. Return the final sum", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.threes_fives(10);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(3);
    });
});