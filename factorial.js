function factorial(n) {
  if (n < 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log("expect 1 to equal: ", factorial(1));
console.log("expect 2 to equal: ", factorial(2));
console.log("expect 6 to equal: ", factorial(3));
console.log("expect 24 to equal: ", factorial(4));
console.log("expect 120 to equal: ", factorial(5));
console.log("expect 720 to equal: ", factorial(6));
console.log("expect 3628800 to equal: ", factorial(10));
console.log("-------------------------------------");
console.log(" ");
console.log(" ");
console.log(" ");

function itFact(n) {
  let answer = 1;

  while (n > 1) {
    answer *= n;
    n--;
  }
  return answer;
}

console.log("expect 1 to equal: ", itFact(1));
console.log("expect 2 to equal: ", itFact(2));
console.log("expect 6 to equal: ", itFact(3));
console.log("expect 24 to equal: ", itFact(4));
console.log("expect 120 to equal: ", itFact(5));
console.log("expect 720 to equal: ", itFact(6));
console.log("expect 3628800 to equal: ", itFact(10));
