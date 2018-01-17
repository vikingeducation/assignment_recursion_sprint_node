const sumDigit = n => {
  let total = 0;
  const numArray = n.toString().split('');
  numArray.forEach(num => (total += Number(num)));
  return total;
};

console.log(sumDigit(10359434));
