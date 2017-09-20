// The Factorial Sequence, denoted n!
// is a classic recursive challenge and a good warmup.
//  In it, each number is the sum of the multiples of every number
//  prior to it. This is interesting because n! = n * (n-1)!,
//  which aught to get your creative juices flowing.
//
// Your Task
//
// Write a recursive method factorialRecursive which takes a number
// and returns the factorial for that number.
//
// Write an iterative method factorialIterative which does the same iteratively.
// A possible approach to a recursive problem:
//
// Identify the individual chunks of repeated work that it can be broken into
// Identify the base case where it can't be chunked anymore
// Figure out how to call each chunk from another chunk

const factorialRecursive = num =>
  num === 1 ? 1 : factorialRecursive(num - 1) * num;

console.log(factorialRecursive(10));

const factorialIterative = num => {
  let acc = num;
  for (let i = 1; i < acc; i++) {
    num *= i;
  }
  return num;
};

console.log(factorialIterative(10));
