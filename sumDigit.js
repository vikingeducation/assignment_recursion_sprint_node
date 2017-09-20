const sumDigitRecursive = n => {
  if (n < 10) {
    return n;
  } else {
    return n % 10 + sumDigitRecursive(Math.floor(n / 10));
  }
};

const sumDigitIterative = n => {
  if (n < 10) {
    return n;
  } else {
    let sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }
};

module.exports = { sumDigitRecursive, sumDigitIterative };
