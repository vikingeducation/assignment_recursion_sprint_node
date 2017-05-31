function digitSum(n) {
  if (n < 10) {
    return n;
  } else {
    return digitSum(Math.floor(n / 10)) + n % 10;
  }
}

console.log("expect 1 to equal: ", digitSum(1));
console.log("expect 2 to equal: ", digitSum(2));
console.log("expect 3 to equal: ", digitSum(3));
console.log("expect 4 to equal: ", digitSum(4));
console.log("expect 6 to equal: ", digitSum(15));
console.log("expect 11 to equal: ", digitSum(623));
console.log("expect 27 to equal: ", digitSum(3628800));
console.log("-------------------------------------");
console.log(" ");
console.log(" ");
console.log(" ");

function itSum(n) {
  let answer = 0;
  while (n > 0) {
    answer += n % 10;
    n = Math.floor(n / 10);
  }
  return answer;
}

console.log("expect 1 to equal: ", itSum(1));
console.log("expect 2 to equal: ", itSum(2));
console.log("expect 3 to equal: ", itSum(3));
console.log("expect 4 to equal: ", itSum(4));
console.log("expect 6 to equal: ", itSum(15));
console.log("expect 11 to equal: ", itSum(623));
console.log("expect 27 to equal: ", itSum(3628800));
