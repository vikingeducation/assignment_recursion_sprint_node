// "use strict";
//
// const nonsenseToZero = num => {
//   return num === 0
//     ? num
//     : num > 0 ? num + nonsenseToZero(-num + 1) : num + nonsenseToZero(-num - 1);
// };
// 4 -3 + 2 - 1 + 0
//
// console.log("NO TAIL: ", nonsenseToZero(1000));
//
"use strict";
const nonsenseToZeroTail = (num, acc) => {
  if (num < 0) {
    return acc;
  }
  acc += num;
  num--;
  return nonsenseToZeroTail(num, acc);
  // return num === 0
  //   ? acc
  //   : num > 0
  //     ? nonsenseToZeroTail(-num + 1, acc + num)
  //     : nonsenseToZeroTail(-num - 1, acc + num);
};

console.log("result: ", nonsenseToZeroTail(10000, 0));
// (function() {
//   function nonsenseToZero(num) {
//     return num === 0
//       ? num
//       : num > 0
//         ? num + nonsenseToZero(-num + 1)
//         : num + nonsenseToZero(-num - 1);
//   }
//   const start = new Date().getTime();
//   const result = nonsenseToZero(10000);
//   const end = new Date().getTime();
//   console.log("Total Time: ", end - start, " mili seconds");
//   return result;
// })();
//
// (function() {
//   "use strict";
//   function nonsenseToZeroTail(num, acc) {
//     return num === 0
//       ? acc
//       : num > 0
//         ? nonsenseToZeroTail(-num + 1, acc + num)
//         : nonsenseToZeroTail(-num - 1, acc + num);
//   }
//   return nonsenseToZeroTail(10000, 0);
// })();

// console.log("TAIL: ", nonsenseToZeroTail(10000, 0));
