// Digit Sum
//
// Write a recursive method sumdigRecursive
//which takes an integer
// and returns the sum of its digits, for
// instance sumdigRecursive(103) returns 4.
// Write an iterative method sumdigIterative
// which does the same iteratively.

const sumdigRecursive = (n, acc=0, idx=0) => {
  if (n.length) 
  acc+=n[idx]
  return sumdigRecursive(n, acc, ++idx)

//  let arr = `${n}`.split('');
  // const recursiveFxn = (arr) =>{
  //   return Number(arr.pop()) + recursiveFxn(arr)
  // }
};

const sumdigIterative = (n) => {
  let acc = 0;
  let arr = `${n}`.split('');
  for (let i=0; i<arr.length; i++){
    acc += Number(arr[i])
  }
  return acc;
};

console.log(sumdigIterative(103))