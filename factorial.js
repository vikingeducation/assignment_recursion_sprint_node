const factorialRecursive = n => {
  if (n < 2) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
};

module.exports = { factorialRecursive };
