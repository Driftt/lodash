var arrayPush = require('./arrayPush'),
    baseDifferenceBy = require('./baseDifferenceBy'),
    baseUniqBy = require('./baseUniqBy');

/**
 * The base implementation of `_.xorBy` without support for callback shorthands.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The function invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXorBy(arrays, iteratee) {
  var index = -1,
      length = arrays.length;

  while (++index < length) {
    var result = result
      ? arrayPush(baseDifferenceBy(result, arrays[index], iteratee), baseDifferenceBy(arrays[index], result, iteratee))
      : arrays[index];
  }
  return (result && result.length) ? baseUniqBy(result, iteratee) : [];
}

module.exports = baseXorBy;
