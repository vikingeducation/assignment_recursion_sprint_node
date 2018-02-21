// takes an integer and returns the sum of its digits, for instance sumdigRecursive(103) returns 4.

function sumDigRecursive(num){
  var digits = num.toString().split('')

  if (digits.length === 1) {
    return digits
  } else {
    return sumDigRecursive( digits.reduce((a, b) => a + Number(b), 0) )
  }
}
console.log(`Recursive: ${sumDigRecursive(103)}`)



function sumDigIterative(num){
  var addDigits = function(digits){
    return digits.toString().split('').reduce((a, b) => a + Number(b), 0)
  }

  var digits = addDigits(num)
  while (digits.lenth > 1) {
    digits = addDigits(digits)
  }
  return addDigits(digits)
}
console.log(`Iterative: ${sumDigIterative(989)}`)




