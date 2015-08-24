var baseDifferenceBy = require('./baseDifferenceBy');

/**
 * The base implementation of `_.difference` without support for excluding
 * multiple arrays of values.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values) {
  return baseDifferenceBy(array, values);
}

module.exports = baseDifference;
