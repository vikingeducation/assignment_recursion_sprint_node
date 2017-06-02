// Given two numbers x and n, find number of ways x can be expressed as sum of n-th power of unique natural numbers.

// Examples:

// Input  : x = 10, n = 2
// Output : 1
// Explanation: 10 = 1^2 + 3^2,
// Hence total 1 possibility

// Input  : x = 100, n = 2
// Output : 3
// Explanation: 100 = 10^2
//              OR 6^2 + 8^2
//              OR 1^2 + 3^2 + 4^2 + 5^2 + 7^2
// Hence total 3 possibilities

const newWeirdCalc = (x, n, minNum = 1) => {
  if (Math.pow(minNum, n) === x) {
    return 1;
  }
  if (Math.pow(minNum, n) > x) {
    return 0;
  }
  return (
    newWeirdCalc(x, n, minNum + 1) +
    newWeirdCalc(x - Math.pow(minNum, n), n, minNum + 1)
  );
};

// function aux(array, value) {
//   console.log(array, value);
//   if (array.length < 1) {
//     return 0;
//   }
//   let n = array[array.length - 1];
//   console.log(n);
//   if (n === value) {
//     return 1;
//   }
//   if (n > value) {
//     return 0;
//   }

//   return aux(array.slice(0, -1), value) + aux(array.slice(0, -1), value - n);
// }

// function unique(x, n) {
//   let possibleNumbers = [...Array(Math.floor(Math.pow(x, 1 / n)) + 1).keys()]
//     .slice(1)
//     .map(number => Math.pow(number, n));
//   return aux(possibleNumbers, x);
// }
// console.log(unique(10, 2));
console.log(newWeirdCalc(100, 2));
