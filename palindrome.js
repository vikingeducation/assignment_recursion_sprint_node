function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();
  if (str.length < 2) {
    return true;
  } else if (str.substring(0, 1) == str.substring(str.length - 1)) {
    return palindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}
console.log("Rise to vote, sir".replace(/[^a-zA-Z0-9]/g, ""));
console.log("expect true to equal: ", palindrome(""));
console.log("expect true to equal: ", palindrome("w"));
console.log("expect true to equal: ", palindrome("ww"));
console.log("expect true to equal: ", palindrome("wtw"));
console.log("expect true to equal: ", palindrome("Able was I ere I saw Elba"));
console.log("expect true to equal: ", palindrome("Rise to vote, sir"));
console.log("expect false to equal: ", palindrome("einp"));
console.log("-------------------------------------");
console.log(" ");
console.log(" ");
console.log(" ");

function itPal(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();
  while (str.length > 1) {
    if (str.substring(0, 1) == str.substring(str.length - 1)) {
      str = str.substring(1, str.length - 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log("expect true to equal: ", itPal(""));
console.log("expect true to equal: ", itPal("w"));
console.log("expect true to equal: ", itPal("ww"));
console.log("expect true to equal: ", itPal("wtw"));
console.log("expect true to equal: ", itPal("Able was I ere I saw Elba"));
console.log("expect true to equal: ", itPal("Rise to vote, sir"));
console.log("expect false to equal: ", itPal("einp"));
