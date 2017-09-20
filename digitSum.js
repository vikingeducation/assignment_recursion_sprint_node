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
  //base case, n is one digit
  if (n <= 10) return n;
  const digit = Math.floor(n % 10);
  return digit + sumdigRecursive(Math.floor((n /= 10)));
};

console.log(sumdigRecursive(1));
console.log(sumdigRecursive(0));
console.log(sumdigRecursive(10));
console.log(sumdigRecursive(11));
console.log(sumdigRecursive(101));

const sumdigIterative = n => {
  return n;
};
const digitAdd = () => {
  return null;
};
