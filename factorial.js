const factorialRecursive = n => (n < 2 ? 1 : n * factorialRecursive(n - 1));

module.exports = { factorialRecursive };
