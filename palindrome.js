function palindromeRecursive(str) {
  const arr = str.toLowerCase().match(/[a-zA-Z]/g);

  if (arr.length < 2) return true;
  if (arr[0] !== arr[arr.length - 1]) return false;

  arr.shift();
  arr.pop();
  const newString = arr.join('');

  return palindromeRecursive(newString);
}
console.log(
  palindromeRecursive("Rise to vote, sir"), // true
  palindromeRecursive("Able was I ere I saw Elba"), // true
  palindromeRecursive("I wish I was a frog") // false
);


function palindromeIterative(str) {
  const arr = str.toLowerCase().match(/[a-zA-Z]/g);
  if (arr.length < 2) return true;

  let isPalindrome = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[arr.length - i - 1]) isPalindrome = false;
  }

  return isPalindrome;
}
console.log(
  palindromeIterative("Rise to vote, sir"), // true
  palindromeIterative("Able was I ere I saw Elba"), // true
  palindromeIterative("I wish I was a frog") // false
);
