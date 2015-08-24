var baseUniqBy = require('./baseUniqBy');

/**
 * The base implementation of `_.uniq`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array) {
  return baseUniqBy(array);
}

module.exports = baseUniq;
