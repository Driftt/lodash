var SetCache = require('./SetCache'),
    arrayMap = require('./arrayMap'),
    baseIndexOf = require('./baseIndexOf'),
    cacheIndexOf = require('./cacheIndexOf');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.differenceBy` without support for callback
 * shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The function invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifferenceBy(array, values, iteratee) {
  var index = -1,
      indexOf = baseIndexOf,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, function(value) { return iteratee(value); });
  }
  if (values.length >= LARGE_ARRAY_SIZE) {
    indexOf = cacheIndexOf;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (indexOf(values, computed, 0) < 0) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifferenceBy;
