const { sumDigitRecursive, sumDigitIterative } = require("../sumDigit");
const sums = require("./sums");

describe("The recursive digit sum function", () => {
  it("recursively returns the correct sum of the digits of a given n", () => {
    sums.forEach((sum, n) => {
      expect(sumDigitRecursive(n)).toEqual(sum);
    });
  });

  it("recursively still works on really large numbers", () => {
    expect(sumDigitRecursive(22334)).toEqual(14);
    expect(sumDigitRecursive(8395134928)).toEqual(52);
  });
});

describe("The iterative digit sum function", () => {
  it("iteratively returns the correct sum of the digits of a given n", () => {
    sums.forEach((sum, n) => {
      expect(sumDigitIterative(n)).toEqual(sum);
    });
  });

  it("iteratively still works on really large numbers", () => {
    expect(sumDigitIterative(22334)).toEqual(14);
    expect(sumDigitIterative(8395134928)).toEqual(52);
  });
});
