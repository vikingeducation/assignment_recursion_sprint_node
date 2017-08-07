const assert = require('assert');

const sumDigitRecursive = (num) => {
  if (num < 1) {
    return 0;
  }

  return (num % 10 + sumDigitRecursive(Math.floor(num / 10)));
};

const sumDigitIterative = (num) => {
  let result = 0;
  let currentNum = num;

  while (currentNum >= 1) {
    result += currentNum % 10;
    currentNum = Math.floor(currentNum / 10);
  }

  return result;
};


assert(sumDigitIterative(103) === 4);
assert(sumDigitIterative(4108) === 13);

assert(sumDigitRecursive(103) === 4);
assert(sumDigitRecursive(4108) === 13);
