var baseSum = require('../internal/baseSum'),
    identity = require('../utility/identity');

/**
 * Gets the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 6]);
 * // => 10
 */
function sum(array) {
  return (array && array.length)
    ? baseSum(array, identity)
    : undefined;
}

module.exports = sum;
