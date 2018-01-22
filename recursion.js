const factorialRecursive = number => {
  if (number == 1) {
    return number;
  }
  return number * factorialRecursive(number - 1);
};

const factorialIterative = number => {
  let product = 1;
  for (let i = 1; i < number + 1; i++) {
    product *= i;
  }
  return product;
};

const sumdigRecursive = integer => {
  if (integer / 10 < 1) {
    return integer;
  }

  return integer % 10 + sumdigRecursive(parseInt(integer / 10));
};

const sumdigIterative = integer => {
  let i = integer;
  let sum = 0;
  while (i > 0) {
    sum += i % 10;
    i = parseInt(i / 10);
  }
  return sum;
};

console.log(factorialRecursive(4));
console.log(factorialIterative(4));
console.log(sumdigRecursive(12345678910));
console.log(sumdigIterative(12345678910));

const palindromeRecursive = string => {
  //racecar
  // rac e car
  // ra c e c ar
  // r a c e c a r
  console.log(string);

  if (string.length < 2) {
    return true;
  }

  if (string[string.length - 1] === string[0]) {
    return palindromeRecursive(string.slice(1, string.length - 1));
  } else {
    return false;
  }
};

console.log(palindromeRecursive("racecar"));
console.log(palindromeRecursive("notpalindrome"));

const palindromeIterative = string => {
  let palindrome = true;
  for (let i = 0; i < string.length / 2; i++) {
    if (!(string[i] === string[string.length - 1 - i])) {
      palindrome = false;
    }
  }
  return palindrome;
};

console.log(palindromeIterative("racecar"));
console.log(palindromeIterative("notpalindrome"));
