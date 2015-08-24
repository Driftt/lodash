var baseIteratee = require('../internal/baseIteratee'),
    baseSum = require('../internal/baseSum');

/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function|Object|string} [iteratee=_.identity] The function invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [
 *   { 'n': 4 },
 *   { 'n': 6 }
 * ];
 *
 * _.sum(objects, function(o) { return o.n; });
 * // => 10
 *
 * // using the `_.property` callback shorthand
 * _.sum(objects, 'n');
 * // => 10
 */
function sumBy(array, iteratee) {
  return (array && array.length)
    ? baseSum(array, baseIteratee(iteratee))
    : undefined;
}

module.exports = sumBy;
