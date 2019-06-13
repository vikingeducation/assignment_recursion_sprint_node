// each number is the sum of the multiples of every number prior to it. This is interesting because n! = n * (n-1)!
// ex: factorial 5! => 1 * 2 * 3 * 4 * 5 = 120

function factorialRecursive(num){
  if (num === 1 || num === 0) {
    return num
  } else {
    return num * factorialRecursive(num - 1)
  }
}
console.log(`Recursive: ${factorialRecursive(5)}`)



function factorialIterative(num){
  var factorial = 1

  for (i = 1; i <= num; i++) {
    factorial *= i
  }
  return factorial
}
console.log(`Iterative: ${factorialIterative(5)}`)



