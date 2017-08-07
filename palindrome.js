const assert = require('assert');

const _scrubString = (string) => {
  return string.replace(/[^\w]/gi, '').toLowerCase();
};

const palindromeRecursive = (string) => {
  string = _scrubString(string);
  if (string.length === 1) {
    return true;
  }

  if (string[0] !== string[string.length - 1]) {
    return false;
  }

  return palindromeRecursive(string.slice(1, string.length - 1));
};

const palindromeIterative = (string) => {
  string = _scrubString(string);
  let currentString = string;

  while (currentString.length > 1) {
    if (currentString[0] !== currentString[currentString.length - 1]) {
      return false;
    }
    currentString = currentString.slice(1, currentString.length - 1);
  }
  return true;
};

assert(palindromeRecursive("madam") === true);
assert(palindromeRecursive("racecar") === true);
assert(palindromeRecursive("apple") === false);
assert(palindromeRecursive("Rise to vote, sir") === true);

assert(palindromeIterative("madam") === true);
assert(palindromeIterative("racecar") === true);
assert(palindromeIterative("apple") === false);
assert(palindromeIterative("Rise to vote, sir") === true);