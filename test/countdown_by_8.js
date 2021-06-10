const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Countdown by 8", () => {
    it("Should log positive numbers starting at 2019, counting down by 8", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.countdown_by_8();
        Expect(result).to.be.false;
        // Expect(result).to.be.undefined;
    });
});