const palindromeRecursive = (str, newStr = "") => {
  let simpleStr = str
    .toLowerCase()
    .split(" ")
    .join("");
  newStr = simpleStr[0] + newStr;
  if (
    (newStr.length + simpleStr.length) % 2 == 1 &&
    newStr.length == simpleStr.length + 1
  ) {
    newStr = newStr.substring(1);
  }
  if (newStr.length == simpleStr.length) {
    return newStr === simpleStr;
  }
  return palindromeRecursive(simpleStr.substring(1), newStr);
};

console.log(palindromeRecursive("Danzig giznad"));

const palindromeIterative = (str, newStr = "") => {
  let simpleStr = str
    .toLowerCase()
    .split(" ")
    .join("");
  newStr = simpleStr[0] + newStr;
  let bool = true;
  for (let i = 0; i < Math.floor(simpleStr.length / 2); i++) {
    if (simpleStr[0 + i] !== simpleStr[simpleStr.length - i - 1]) {
      bool = false;
    }
  }
  return bool;
};

console.log(palindromeIterative("Danzig lkjgiznad"));
