import baseSum from '../internal/baseSum';
import identity from '../utility/identity';

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

export default sum;
