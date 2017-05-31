function palindromeRecursive(string) {
  if (string.length < 1) return true;
  if (string[0] !== string[string.length - 1]) return false;
  return palindromeRecursive(string.slice(1, -1));
}

function palindromeIterative(string) {
  let nextString = string;
  while (nextString.length > 1) {
    if (nextString[0] !== nextString[nextString.length - 1]) {
      return false;
    }
    nextString = nextString.slice(1, -1);
  }
  return true;
}

const words = [
  "a",
  "civic",
  "horse",
  "anna",
  "battery",
  "repaper",
  "stapler"
];

words.forEach(word => {
  console.log("recursive", word, palindromeRecursive(word));
  console.log("iterative", word, palindromeIterative(word));
  console.log();
});
