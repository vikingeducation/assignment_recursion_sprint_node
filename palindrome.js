// Write a recursive method palindromeRecursive which returns true if a given string is a palindrome.

function palindromeRecursive(n) {
  n = n.toLowerCase().split(" ").join("");
  if (n.length <= 1) {
    return true;
  } else if (n[0] !== n[n.length - 1]) {
    return false;
  } else {
    return palindromeRecursive(n.slice(1, n.length - 1));
  }
}

console.log(palindromeRecursive("Rise to vote sir"));
console.log(palindromeRecursive("Able was I ere I saw Elba"));

// Write an iterative method palindromeIterative which does the same iteratively.

function palindromeIterative(n) {
  n = n.toLowerCase().split(" ").join("");
  while (n.length >= 2) {
    if (n[0] !== n[n.length - 1]) {
      return false;
      break;
    }
    n = n.slice(1, n.length - 1);
  }
  return true;
}

console.log(palindromeIterative("Rise to vote sir"));
console.log(palindromeIterative("Able was I ere I saw Elba"));
