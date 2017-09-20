const sumDigitRecursive = n => {
  if (n < 10) {
    return n;
  } else {
    const strN = String(n);
    return +strN[0] + sumDigitRecursive(+strN.slice(1));
  }
};

module.exports = { sumDigitRecursive };
