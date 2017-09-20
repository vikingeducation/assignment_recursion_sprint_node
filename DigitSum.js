// Digit Sum
//
// Write a recursive method sumdigRecursive
//which takes an integer
// and returns the sum of its digits, for
// instance sumdigRecursive(103) returns 4.
// Write an iterative method sumdigIterative
// which does the same iteratively.

const sumdigRecursive = (num, acc=0, idx=0) => {
  if (`${num}`.length === idx) return acc;
  let numArr = `${num}`.split('')
  acc+=Number(numArr[idx])
  ++idx
  return sumdigRecursive(num, acc, idx)
};

console.log(sumdigRecursive(105))


const sumdigIterative = (n) => {
  let acc = 0;
  let arr = `${n}`.split('');
  for (let i=0; i<arr.length; i++){
    acc += Number(arr[i])
  }
  return acc;
};