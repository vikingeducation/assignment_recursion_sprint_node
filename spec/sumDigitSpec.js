const { sumDigitRecursive } = require("../sumDigit");
const sums = require("./sums");

describe("The recursive digit sum function", () => {
  it("recursively returns the correct sum of the digits of a given n", () => {
    sums.forEach((sum, n) => {
      expect(sumDigitRecursive(n)).toEqual(sum);
    });
  });
});
