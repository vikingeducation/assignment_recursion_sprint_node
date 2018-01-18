const factorial = n => {
  // let total = n;
  for (let i = n; i > 1; i--) {
    n *= i - 1;
  }
  return n;
};

console.log(factorial(13));
