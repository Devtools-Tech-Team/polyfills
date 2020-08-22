'use strict';

function reduce(callback, initialValue) {
	if (this === null) {
		throw new TypeError(
			'Array.prototype.reduce called on null or undefined'
		);
	}

	if (!callback || typeof callback !== 'function') {
		throw new TypeError(`${callback} is not a function`);
	}

	if (!this.length && initialValue) {
		return initialValue;
	} else if (!this.length && arguments.length < 2) {
		throw new TypeError('Reduce of empty array with no initial value');
	}

	var k = 0;
	var value = initialValue;

	if (arguments.length < 2) {
		value = this[k++];
	}

	while (k < this.length) {
		if (Object.prototype.hasOwnProperty.call(this, k)) {
			value = callback(value, this[k], k, this);
		}
		k++;
	}

	return value;
}

module.exports = reduce;
