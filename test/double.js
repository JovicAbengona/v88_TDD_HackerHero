const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Double", () => {
    it("Should return a new array where each value in the original has been doubled", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.double([-4,0,4]);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(50);
    });
});