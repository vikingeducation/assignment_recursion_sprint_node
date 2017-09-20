const sumDigitRecursive = n => {
  if (n < 10) {
    return n;
  } else {
    const strN = String(n);
    return +strN[0] + sumDigitRecursive(+strN.slice(1));
  }
};

const sumDigitIterative = n => {
  if (n < 10) {
    return n;
  } else {
    return String(n)
      .split("")
      .reduce((sum, part) => sum + +part, 0);
  }
};

module.exports = { sumDigitRecursive, sumDigitIterative };
