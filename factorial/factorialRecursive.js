const factorial = n => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);

  // n === 1 ? 1 : n * factorial(n - 1);
};
console.log(factorial(13));
