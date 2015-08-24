var baseXorBy = require('./baseXorBy');

/**
 * The base implementation of `_.xor` that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays) {
  return baseXorBy(arrays);
}

module.exports = baseXor;
