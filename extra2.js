// Given a number as string, remove recurring digits from the given string.

// Examples:

// Input:  num = "1299888833"
// Output: num = "12983"

// Input:  num = "1299888833222"
// Output: num = "12983"

function removeRep(num, result = []) {
  if (num.length === 0) {
    return result.join("");
  }
  !result.includes(num.slice(0, 1)) ? result.push(num.slice(0, 1)) : null;
  return removeRep(num.slice(1), result);
}

console.log(removeRep("12998888833"));
console.log(removeRep("1299888833222"));
