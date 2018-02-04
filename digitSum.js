function sumdigRecursive(n) {
  if (!parseInt(n)) return NaN;

  const numArray = n.toString().split('').map(n => parseInt(n));
  const currentNum = numArray.shift();
  const remainingNum = parseInt(numArray.join(''));

  return remainingNum ? currentNum + sumdigRecursive(remainingNum) : currentNum;
}
console.log(sumdigRecursive(103));


function sumdigIterative(n) {
  if (!parseInt(n)) return NaN;

  const numArray = n.toString().split('').map(n => parseInt(n));

  let result = 0;
  for (var i = 0; i < numArray.length; i++) {
    result += numArray[i];
  }

  return result;
}
console.log(sumdigIterative(103));
