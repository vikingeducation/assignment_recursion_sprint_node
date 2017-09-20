// A "Palindrome" is a word or sentence which is the same whether read forwards or backwards, for instance "Rise to vote, sir" or "Able was I ere I saw Elba".

// Write a recursive method palindromeRecursive which returns true if a given string is a palindrome. Hint: strings with zero or 1 letters are always palindromes. Note: Do not use the reverse method... too easy!
// Write an iterative method palindromeIterative which does the same iteratively.

var palindromeRecursive=(str)=>{
  if (str.length<2) return true;
  console.log('str[0] = ', str[0], ', str[-1] = ', str[str.length-1])
  if (str[0]!==str[str.length-1]) return false;
  if (str[0]===str[str.length-1]) return palindromeRecursive(str.slice(1, -1))
}
// console.log(palindromeRecursive('yty'), 'should be true')
// console.log(palindromeRecursive('tyuu'), 'should be false')
// console.log(palindromeRecursive('ytu'), 'should be false')
// console.log(palindromeRecursive('ytty'), 'should be true')

var palindromeIterative = (str)=>{
    if (str.length<2) return true;
    for (let i=0; i<str.length; i++) {
      if (str[i] !== str[str.length-(i+1)]){
        return false;
      }
    }
    return true;
}

console.log(palindromeIterative('yty'), 'should be true')
console.log(palindromeIterative('tyuu'), 'should be false')
console.log(palindromeIterative('ytu'), 'should be false')
console.log(palindromeIterative('ytty'), 'should be true')