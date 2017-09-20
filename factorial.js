const getFactorial = n => factorial(n, 1);
const factorial = (n, acc) => (n <= 1 ? acc : factorial(n - 1, n * acc));

const nonTCFactorial = n => (2 > n ? 1 : n * nonTCFactorial(n - 1));

const facTimeStart = new Date().getTime();
console.log('TC', getFactorial(5));
const facTimeEnd = new Date().getTime();
console.log(facTimeEnd - facTimeStart, 'μs');

const facnonTCStart = new Date().getTime();
console.log('non-TC', nonTCFactorial(5));
const facnonTCEnd = new Date().getTime();
console.log(facnonTCEnd - facTimeStart, 'μs');

const factorialIter = n => {
	n = 2 > n ? 1 : n;
	let sum = n;
	while (--n > 1) {
		sum *= n;
	}
	return sum;
};

const facIterStart = new Date().getTime();
console.log('Iter', factorialIter(3));
const facIterEnd = new Date().getTime();
console.log(facIterEnd - facIterStart, 'μs');
