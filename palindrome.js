const palindromeRecursive = str => {
  // normalize str
  // convert to lowercase, and remove non-alpha chars
  let normalizedStr = str
    .toLowerCase()
    .split("")
    .filter(char => /[a-z]/.test(char))
    .join("");
  const reverse = customReverse(normalizedStr);
  if (normalizedStr === reverse) return true;
  return false;
};
const filter = str => {
  return str
    .toLowerCase()
    .split("")
    .filter(char => /[a-z]/.test(char))
    .join("");
};
console.log('filtering "Rise to vote, sir"', filter("Rise to vote, sir"));

//reverses a string
const customReverse = str => {
  if (str.length === 1) return str;
  return customReverse(str.slice(1)) + str.charAt(0);
};
console.log(customReverse("abcd"));

// approach thought one
// string.length even or odd
//
// Able was I e
// r
// e I saw Elba

//approach thought 2
// Able was I ere I saw Elba
//
// Able was I ere I saw Elba
// a
// b
// l
// ....
// a
//
// originalStr === str.reverse()
// str.reverse()
console.log(palindromeRecursive("a"));
console.log(palindromeRecursive("aba"));
console.log(palindromeRecursive("abad"));
console.log(palindromeRecursive("a;lskdfj;lkjsdfFFFFFFFad"));
console.log(palindromeRecursive("Rise to vote, sir"));
console.log(palindromeRecursive("Able was I ere I saw Elba"));

// aba
//0 , 2
//base cases
//a
//aa
//a a a
//baab  //bb //aa
// abba
//1 , 2
// abda

//algorithm : if the end characters match && the middle characters are a palindrome then it's a palindrome
const multipleRecursionMadness = str => {
  //TODO: NORMALIZE STR
  //base cases
  //str.length = 0
  if (str.length === 0) return true;
  //str.length = 1
  if (str.length === 1) return true;
  //str.length = 2
  if (str.length === 2 && str.charAt(0) === str.charAt(1)) {
    return true;
  } else {
    return false;
  }

  //call of first and last letter
  const endCharacters = str.charAt(0) + str.charAt(str.length - 1);

  //call with everything in the middle
  const middleCharacters = str.slice(1, -1);
  return (
    multipleRecursionMadness(endCharacters) &&
    multipleRecursionMadness(middleCharacters)
  );
};

console.log("multiple recursion ,", multipleRecursionMadness("a"));
console.log("multiple recursion ,", multipleRecursionMadness("aba"));
console.log("multiple recursion ,", multipleRecursionMadness("abb"));
console.log("multiple recursion ,", multipleRecursionMadness("abad"));

const palindromeIterative = str => {
  return;
};
