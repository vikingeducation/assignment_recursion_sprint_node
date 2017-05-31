function factorialRecursive(n, result = 1) {
  if (n <= 1) {
    return result;
  } else {
    return factorialRecursive(n - 1, result * n);
  }
}

console.log(factorialRecursive(5));
//fact(1) = 1
//fact(2) = 2 * fact(1)
//fact(3) = 3 * fact(2)
//fact(4) = 4 * fact(3)

function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorialIterative(5));
