const sumDigit = (n, numArray = n.toString().split(""), total = 0) => {
  if (!numArray.length) {
    return total;
  }
  total += Number(numArray.shift());
  return sumDigit(n, numArray, total);
};

console.log(sumDigit(10359434));

// //> Math.floor(112 / 10)
// 11
// > var n = 1234;
// undefined
// > n % 10
// 4
// > Math.floor(n / 10)
// 123
