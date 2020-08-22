const reduce = require('./reduce');

const sum = (s, v) => s + v;

describe('Error Conditions', () => {
	beforeAll(() => {
		Array.prototype.customReduce = reduce;
	});

	// 1
	test('Check if this exists, reduce is not called on null or undefined', () => {
		function init() {
			Array.prototype.customReduce.call(null, sum, 2);
		}
		expect(init).toThrow(TypeError);
	});

	// 2
	// test('Check if callback is a function', () => {
	// 	expect(() => [].customReduce()).toThrow(TypeError);
	// });

	// 3
	// test('Reduce on empty array with no initialValue', () => {
	// 	expect(() => [].customReduce(sum)).toThrow(TypeError);
	// });
});

describe('Reduce Functionality', () => {
	beforeAll(() => {
		Array.prototype.customReduce = reduce;
	});

	// 4
	// test('Invoked on empty array with initialValue, returns initialValue', () => {
	// 	var initialValue = 5;
	// 	expect([].customReduce(sum, initialValue)).toBe(initialValue);
	// });

	// 5
	// test('Invoked without initialValue', () => {
	// 	var caller = [1, 2, 3];

	// 	expect(caller.customReduce(sum)).toBe(6);
	// });

	// 6
	// test('Invoked with initialValue', () => {
	// 	var caller = [1, 2, 3];

	// 	expect(caller.customReduce(sum, 1)).toBe(7);
	// });

	// 7
	// test('Custom Test Case | Reduce Promise', () => {
	// 	function first() {
	// 		return Promise.resolve(1);
	// 	}
	// 	function second(v) {
	// 		return Promise.resolve(v + 2);
	// 	}
	// 	function third(v) {
	// 		return Promise.resolve(v + 3);
	// 	}
	// 	function fourth(v) {
	// 		return Promise.resolve(v + 4);
	// 	}

	// 	var promises = [first, second, third, fourth];
	// 	var answer = promises.reduce((acc, current) => acc.then(current), Promise.resolve());

	// 	expect(answer).resolves.toEqual(10);
	// });
});
