var baseIntersectionBy = require('./baseIntersectionBy');

/**
 * The base implementation of `_.intersection` that accepts an array of arrays
 * to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays) {
  return baseIntersectionBy(arrays);
}

module.exports = baseIntersection;
