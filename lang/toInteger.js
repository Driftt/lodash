/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1e308;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 *  _.toInteger('3.14');
 *  // => 3
 *
 * _.toInteger(NaN);
 * // => 0
 *
 * _.toInteger(-Infinity)
 * // => -1e308
 */
function toInteger(value) {
  if (value === INFINITY || value === -INFINITY) {
    return (value < 0 ? -1 : 1) * MAX_INTEGER;
  }
  value = +value;
  var remainder = value % 1;
  return value === value ? (remainder ? value - remainder : value) : 0;
}

module.exports = toInteger;
