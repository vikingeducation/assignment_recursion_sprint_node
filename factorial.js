function factorialRecursive(n) {
  if (n < 2) {
    return 1;
  }

  return factorialRecursive(n - 1) * n;
}

console.log(factorialRecursive(5)); // should be 120

function factorialIterative(n) {
  if (n < 2) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorialIterative(5)); // should be 120

