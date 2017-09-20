const factorialRecursive = n => (n < 2 ? 1 : n * factorialRecursive(n - 1));

const factorialIterative = n => {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
};

module.exports = { factorialRecursive, factorialIterative };
