const palRec = str => palindromeRecursive(str.trim().replace(/[^a-zA-Z]/g, ''));

const palindromeRecursive = str =>
	2 > str.length
		? true
		: str[0] === str[str.length - 1] && palindromeRecursive(str.slice(1, -1));

console.log('is Palindrome: ', palRec('race,,,,,,,,,car'));

const palindromeIterative = str => {
	str = str.trim().replace(/[^a-zA-Z]/g, '');
	for (let i = 0, c = str.length - 1; i < c; i++, c--)
		if (str[i] !== str[c]) return false;
	return true;
};

const palindromeFunctional = str =>
	str
		.trim()
		.replace(/[^a-zA-Z]/g, '')
		.split('')
		.reduce(
			(acc, val, idx, arr) => acc && val === arr[arr.length - idx - 1],
			true
		);

console.log('is palFunc: ', palRec('ra!24ce,,,,,,,,,ca243r#'));
