function sumdigRecursive(num, result) {
  if (!result) result = 0;
  const numString = String(num);
  if (!numString.length) return result;
  result += Number(numString[0]);
  const nextNum = numString.slice(1, numString.length);
  return sumdigRecursive(nextNum, result);
}

function sumdigIterative(num) {
  const numStringArray = String(num).split("");
  return numStringArray.reduce((a, b) => a + Number(b), 0);
}
