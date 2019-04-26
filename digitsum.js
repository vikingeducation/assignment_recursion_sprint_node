function sumdigRecursive(num) {
	if (!num) return 0;
	let lastIndex = num.toString().length;
	let workingDigit = Number(
		num
			.toString()
			.split("")
			.shift()
	);
	let restOfDigits = Number(num.toString().slice(1, lastIndex));
	return workingDigit + sumdigRecursive(restOfDigits);
}

function sumDigIterative(num) {
	return num
		.toString()
		.split("")
		.reduce((a, b) => a + Number(b), 0);
}
