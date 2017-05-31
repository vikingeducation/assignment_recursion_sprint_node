// Write a recursive method sumdigRecursive which takes an integer and returns the sum of its digits, for instance sumdigRecursive(103) returns 4.

function sumdigRecursive(n) {
  if (n.toString().length === 1) {
    return n;
  } else {
    return (
      parseInt(n.toString().slice(0, 1)) +
      sumdigRecursive(parseInt(n.toString().slice(1)))
    );
  }
}

console.log(sumdigRecursive(103));

// Write an iterative method sumdigIterative which does the same iteratively.

function sumdigIterative(n) {
  n = n.toString().split("").map(Number);
  let result = 0;
  n.forEach(number => (result += number));
  return result;
}

console.log(sumdigIterative(103));
