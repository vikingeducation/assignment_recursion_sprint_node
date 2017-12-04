function factorialRecursive(num) {
  if (num < 1) {
    return 0;
  }
  if (num === 1) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}

function factorialIterative(num) {
  if (num < 1) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let sum = num;
    for (var i = num - 1; i > 1; i--) {
      sum *= i;
    }
    return sum;
  }
}

function sumdigRecursive(num) {
  if (String(num).length < 2) {
    return num;
  } else {
    //1234 => 4 + func(123)
    return (
      Number(String(num)[String(num).length - 1]) +
      sumdigRecursive(Math.floor(num / 10))
    );
  }
}

function sumdigIterative(num) {
  if (String(num).length < 2) {
    return num;
  } else {
    let sum = 0;
    for (var i = 0; i < String(num).length; i++) {
      sum += Number(String(num)[i]);
    }
    return sum;
  }
}

function palindromeRecursive(word) {
  if (word.length < 2) {
    return true;
  } else if (word[0] === word[word.length - 1]) {
    return palindromeRecursive(word.slice(1, word.length - 1));
  } else {
    return false;
  }
}

function palindromeIterative(word) {
  if (word.length < 2) {
    return true;
  } else {
    let answer = true;
    while (answer && word.length > 1) {
      if (word[0] === word[word.length - 1]) {
        word = word.slice(1, word.length - 1);
      } else {
        answer = false;
      }
    }
    return answer;
  }
}

//Factorial
console.log("Factorial Recursive 7:", factorialRecursive(7));
console.log("Factorial Iterative 7:", factorialIterative(7));
//Sum Digits
console.log("Sum Digits Recursive 1234:", sumdigRecursive(1234));
console.log("Sum Digits Iterative 1234:", sumdigIterative(1234));
//Palindromes
console.log(
  "Palindrome Fail Recursive racedcar",
  palindromeRecursive("racedcar")
);
console.log(
  "Palindrome Success Recursive racecar",
  palindromeRecursive("racecar")
);
console.log(
  "Palindrome Fail Iterative racedcar",
  palindromeIterative("racedcar")
);
console.log(
  "Palindrome Success Iterative racecar",
  palindromeIterative("racecar")
);
