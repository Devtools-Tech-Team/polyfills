'use strict';

function reduce(callback, initialValue) {
	if (this === null || this === undefined) {
		throw new TypeError(
			'Array.prototype.reduce called on null or undefined'
		);
	}

	if (!callback || typeof callback !== 'function') {
		throw new TypeError(`${callback} is not a function`);
	}

	if (!this.length) {
		if (arguments.length < 2) {
			throw new TypeError('Reduce of empty array with no initial value');
		} else if (arguments.length === 2) {
			return initialValue;
		}
	}

	var k = 0;
	var acc = arguments.length < 2 ? this[k++] : initialValue;

	while (k < this.length) {
		if (Object.prototype.hasOwnProperty.call(this, k)) {
			acc = callback(acc, this[k], k, this);
		}
		k++;
	}

	return acc;
}

module.exports = reduce;
