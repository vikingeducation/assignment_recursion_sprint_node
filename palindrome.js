function recursivePalindrome(str) {
	if (str.length <= 1) return true;
	if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
	return recursivePalindrome(str.slice(1, -1));
}

function iterativePalindrome(str) {
	let stra = str;
	while (stra.length >= 2) {
		if (stra.charAt(0) !== stra.charAt(stra.length - 1)) return false;
		stra.slice(1, -1);
	}
	return true;
}
