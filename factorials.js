//TODO: TRY TAIL CALL OPTIMIZATION LATER
const factorialRecursive = n => {
  if (n <= 0) return 1;
  return factorialRecursive(n - 1) * n;
};

console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(2));
console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(111111111)); //call stack exceeded

const factorialIterative = n => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorialIterative(0));
console.log(factorialIterative(1));
console.log(factorialIterative(2));
console.log(factorialIterative(3));
console.log(factorialIterative(4));
console.log(factorialIterative(111));
console.log(factorialIterative(111111111)); //=> Infinity
