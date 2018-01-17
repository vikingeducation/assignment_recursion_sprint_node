const sumdigRecursive = (num, sum = 0) => {
  let numStr = num.toString();
  if (numStr.length == 0) {
    return sum;
  }
  return sumdigRecursive(numStr.substring(1), sum + Number(numStr[0]));
};

console.log(sumdigRecursive(58154));

const sumdigIterative = (num, sum = 0) => {
  let numStr = num.toString();
  while (numStr.length) {
    sum += Number(numStr[0]);
    numStr = numStr.substring(1);
  }
  return sum;
};

console.log(sumdigIterative(58154));
