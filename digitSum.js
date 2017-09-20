/*
Digit Sum
Write a recursive method sumdigRecursive which takes an integer and returns the sum of its digits, for instance sumdigRecursive(103) returns 4.
Write an iterative method sumdigIterative which does the same iteratively.
*/

//103
// 0-9 / 10

//103
// 10, 3
// 1, 3

const sumdigRecursive = n => {
  n = Math.abs(n);
  if (n < 10) return n;
  const digit = Math.floor(n % 10);
  return digit + sumdigRecursive(Math.floor((n /= 10)));
};

console.log("recursive group");
console.log(sumdigRecursive(1));
console.log(sumdigRecursive(0));
console.log(sumdigRecursive(10));
console.log(sumdigRecursive(11));
console.log(sumdigRecursive(101));
console.log(sumdigRecursive(103));
console.log(sumdigRecursive(1234));
console.log(sumdigRecursive(-1234));

const sumdigIterative = n => {
  let result = 0;
  while (n > 0) {
    result += Math.floor(n % 10);
    n = Math.floor(n / 10);
  }
  return result;
};

console.log("iterative group");
console.log(sumdigIterative(1));
console.log(sumdigIterative(0));
console.log(sumdigIterative(10));
console.log(sumdigIterative(11));
console.log(sumdigIterative(101));
console.log(sumdigIterative(103));
console.log(sumdigIterative(1234));

const digitAdd = n => {
  return n
    .toString()
    .split("")
    .map(n => parseInt(n))
    .reduce((sum, el) => sum + el);
  // return (result = n.map(n => parseInt(n)).reduce((sum, el) => sum + el));
};

console.log(digitAdd(101));
console.log(digitAdd(103));
console.log(digitAdd(1234));
