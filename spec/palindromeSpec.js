const { palindromeRecursive } = require("../palindrome");

const palindromes = [
  "risetovotesir",
  "ablewasiereisawelba",
  "abutttuba",
  "kayak",
  "olsonisinoslo"
];

const notPalindromes = [
  "this is not a palindrome",
  "i heard you were looking for palindromes",
  "able was i, ere i butt tuba"
];

describe("The recursive palindrome function", () => {
  it("recursively identifies palindromes as such", () => {
    palindromes.forEach(p => {
      expect(palindromeRecursive(p)).toBeTruthy();
    });
  });

  it("recursively identifies non-palindromes as such", () => {
    notPalindromes.forEach(p => {
      expect(palindromeRecursive(p)).toBeFalsy();
    });
  });
});
