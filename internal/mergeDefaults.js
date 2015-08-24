var baseClone = require('./baseClone'),
    baseMerge = require('./baseMerge'),
    isObject = require('../lang/isObject');

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use.
 *
 * @private
 * @param {*} objValue The destination object property value.
 * @param {*} srcValue The source object property value.
 * @returns {*} Returns the value to assign to the destination object.
 */
function mergeDefaults(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, mergeDefaults, stack);
  }
  return objValue === undefined ? baseClone(srcValue) : objValue;
}

module.exports = mergeDefaults;
