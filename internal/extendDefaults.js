/**
 * Used by `_.defaults` to customize its `_.assign` use.
 *
 * @private
 * @param {*} objValue The destination object property value.
 * @param {*} srcValue The source object property value.
 * @returns {*} Returns the value to assign to the destination object.
 */
function extendDefaults(objValue, srcValue) {
  return objValue === undefined ? srcValue : objValue;
}

module.exports = extendDefaults;
