var SetCache = require('./SetCache'),
    arrayMap = require('./arrayMap'),
    baseIndexOf = require('./baseIndexOf'),
    cacheIndexOf = require('./cacheIndexOf');

/**
 * The base implementation of `_.intersectionBy` without support for callback
 * shorthands.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The function invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersectionBy(arrays, iteratee) {
  var othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, function(value) { return iteratee(value); });
    }
    caches[othIndex] = (iteratee || array.length >= 120) ? new SetCache(othIndex && array) : null;
  }
  array = arrays[0];

  var index = -1,
      length = array ? array.length : 0,
      seen = caches[0];

  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    if ((seen ? cacheIndexOf(seen, computed) : baseIndexOf(result, computed, 0)) < 0) {
      var othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if ((cache ? cacheIndexOf(cache, computed) : baseIndexOf(arrays[othIndex], computed, 0)) < 0) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersectionBy;
