/**
 * Adds two numbers.
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {number} augend The first number to add.
 * @param {number} addend The second number to add.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.add(6, 4);
 * // => 10
 */
function add(augend, addend) {
  var result;
  if (augend === augend && augend != null) {
    result = augend;
  }
  if (addend === addend && addend != null) {
    result = result === undefined ? addend : (result + addend);
  }
  return result;
}

module.exports = add;
