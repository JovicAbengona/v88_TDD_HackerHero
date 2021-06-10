const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Swap Towards Center", () => {
    it("Should swap first and last, second and second-to-last, third and third-to- last, etc. Have the function return this swapped array", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.swap_to_center(["hi", "coding", "dojo", "fans"]);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(3);
    });
});