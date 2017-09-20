const { factorialRecursive } = require("../factorial");

const factorials = [
  1,
  1,
  2,
  6,
  24,
  120,
  720,
  5040,
  40320,
  362880,
  3628800,
  39916800,
  479001600,
  6227020800,
  87178291200,
  1307674368000,
  20922789888000,
  355687428096000,
  6402373705728000
];

describe("The recursive factorial function", () => {
  it("returns the correct factorial for a given n", () => {
    factorials.forEach((fact, n) => {
      expect(factorialRecursive(n)).toEqual(fact);
    });
  });
});
