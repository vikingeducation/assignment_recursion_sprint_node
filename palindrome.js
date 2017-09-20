const palindromeRecursive = p => {
  if (p.length < 2) {
    return true;
  } else {
    return p[0] === p.slice(-1) && palindromeRecursive(p.slice(1, -1));
  }
};

const palindromeIterative = p => {
  while (p.length > 1) {
    if (p[0] !== p.slice(-1)) return false;
    p = p.slice(1, -1);
  }
  return true;
};

module.exports = { palindromeRecursive, palindromeIterative };
