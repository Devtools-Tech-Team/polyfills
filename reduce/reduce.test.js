const reduce = require('./reduce');

const sum = (s, v) => s + v;

describe('Error Conditions', () => {
	beforeAll(() => {
		Array.prototype.customReduce = reduce;
	});

	test('Check if this exists, reduce is not called on null or undefined', () => {
		var caller = void 0;

		expect(() => caller.customReduce(sum)).toThrow(TypeError);
	});

	test('Check if callback is a function', () => {
		expect(() => [].customReduce()).toThrow(TypeError);
	});

	test('Reduce on empty array with no initialValue', () => {
		expect(() => [].customReduce(sum)).toThrow(TypeError);
	});
});

describe('Reduce Functionality', () => {
	beforeAll(() => {
		Array.prototype.customReduce = reduce;
	});

	test('Invoked without initialValue', () => {
		var caller = [1, 2, 3];

		expect(caller.customReduce(sum)).toBe(6);
	});

	test('Invoked with initialValue', () => {
		var caller = [1, 2, 3];

		expect(caller.customReduce(sum, 1)).toBe(7);
	});
});
