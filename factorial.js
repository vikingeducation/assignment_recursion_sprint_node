const factorialRecursive = (number, result = 1) => {
  if(number < 0){
    return "undefined"
  }
  if(number === 1 || number === 0){
    return result
  }
  return factorialRecursive(number - 1, result * number)
}

console.log(factorialRecursive(-5))
console.log(factorialRecursive(4))

const factorialIterative = number => {
  if(number < 0){
    return "undefined"
  }
  let result = 1;
  while(number > 0){
    result *= number
    number--
  }
  return result;
}

console.log(factorialIterative(-5))
console.log(factorialIterative(4))
