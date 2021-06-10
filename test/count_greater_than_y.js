const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Count Greater Than Y", () => {
    it("Should count and return the number of array values greater than Y", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.count_greater_than_y([4,10,15], 20);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(3);
    });
});