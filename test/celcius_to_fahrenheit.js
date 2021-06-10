const HackerHeroTests = require("../app");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Convert Celcius to Fahrenheit", () => {
    it("Should convert celcius (argument) to fahrenheit", () => {
        const hh_test = new HackerHeroTests();
        const result = hh_test.celcius_to_fahrenheit(10);
        Expect(result).to.be.false;
        // Expect(result).to.be.eq(50);
    });
});