const assert = require('assert');

const factorialRecursive = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorialRecursive(num - 1);
};

const factorialIterative = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  let currentNum = num;
  let result = 1;
  while (currentNum > 1) {
    result *= currentNum;
    currentNum--;
  }

  return result;
};

assert(factorialRecursive(4) === 24);
assert(factorialRecursive(5) === 120);

assert(factorialIterative(4) === 24);