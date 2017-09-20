const palindromeRecursive = p => {
  if (p.length < 2) {
    return true;
  } else {
    return p[0] === p.slice(-1) && palindromeRecursive(p.slice(1, -1));
  }
};

module.exports = { palindromeRecursive };
