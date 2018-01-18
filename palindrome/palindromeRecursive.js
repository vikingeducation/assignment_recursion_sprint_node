const palindromeRecursive = str =>
  str.length <= 1
    ? true
    : str[0] == str.slice(-1) ? palindromeRecursive(str.slice(1, -1)) : false;
console.log(palindromeRecursive("abcba"));
