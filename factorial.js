function factorialRecursive(num) {
  if (num < 2) return 1;
  return num * factorialRecursive(num - 1);
}

function factorialIterative(num) {
  if (num < 2) return 1;
  let result = 2;
  for (let n = 3; n <= num; n++) {
    result *= n;
  }
  return result;
}
