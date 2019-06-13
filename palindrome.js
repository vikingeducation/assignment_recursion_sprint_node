// returns true if a given string is a palindrome. Hint: strings with zero or 1 letters are always palindromes. Note: Do not use the reverse method... too easy!

function palindromeRecursive(word){
  var lastLetter = function(word){
    return word.substring(word.length -1)
  }
  var nextLettersIn = function(word){
    return word.substring(1, word.length - 1)
  }

  if (word.length === 1 || word.length === 0) {
    return true
  } else if (word[0] === lastLetter(word)) {
    return palindromeRecursive( nextLettersIn(word) )
  } else {
    return false
  }
}


// only kinda sorta working...
function palindromeIterative(word){
  var letters = word.split('')
  var result = true

  letters.forEach(function(letter) {
    console.log( letter != word.substring(word.length -1) );
    if (letter != word.substring(word.length -1) ) {
      result = false
      return result
    }
    letters.pop()
  });
  return result
}



var input = 'tacocat'
console.log(`Recursive: ${input} is a palindrome? => ${palindromeRecursive(input)}`)
console.log(`Iterative: ${input} is a palindrome? => ${palindromeIterative(input)}`)
