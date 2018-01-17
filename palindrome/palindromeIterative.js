const palindromeIterative = str => {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] == str[str.length - 1 - i]) {
      continue;
    }
    return false;
  }
  return true;
};

console.log(palindromeIterative("abba"));
console.log(palindromeIterative("abcba"));
console.log(palindromeIterative("abxcba"));
