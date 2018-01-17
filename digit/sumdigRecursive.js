const sumDigit = (n, numArray = n.toString().split(''), total = 0) => {
  if (!numArray.length) {
    return total;
  }
  total += Number(numArray.shift());
  return sumDigit(n, numArray, total);
};

console.log(sumDigit(10359434));
