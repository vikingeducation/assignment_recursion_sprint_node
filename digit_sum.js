const sumDigRecursive = n => {
  return 10 > n
    ? n
    : parseInt(n.toString()[0]) +
      sumDigRecursive(parseInt(n.toString().slice(1)));
};

console.log("sumRecursive: ", sumDigRecursive(123));

const sumDigIterative = n => {
  let sum = 0,
    tmp;
  while (n > 0) {
    tmp = n % 10;
    sum += tmp;
    n /= 10;
    n = Math.floor(n);
  }
  return sum;
};

console.log("sumIter: ", sumDigIterative(19));
