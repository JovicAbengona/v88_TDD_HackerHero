const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Make it big", () => {
    it("Should change all positive numbers in the array to 'big'", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.make_it_big([-4,0,4]);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(50);
    });
});