function factorialRecursive(num) {
	if (num < 1 || typeof num != "number") {
		return;
	}

	if (num === 1) {
		return 1;
	}

	return num * factorialRecursive(num - 1);
}

function iterativeFactorial(num) {
	if (num === 1) {
		return 1;
	}

	let result = 2;
	for (let i = 3; i <= num; i++) {
		result *= i;
	}

	return result;
}
