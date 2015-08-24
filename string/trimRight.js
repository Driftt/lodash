var charsRightIndex = require('../internal/charsRightIndex'),
    stringToArray = require('../internal/stringToArray'),
    toString = require('../lang/toString'),
    trimmedRightIndex = require('../internal/trimmedRightIndex');

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimRight('  abc  ');
 * // => '  abc'
 *
 * _.trimRight('-_-abc-_-', '_-');
 * // => '-_-abc'
 */
function trimRight(string, chars, guard) {
  string = toString(string);
  if (!string) {
    return string;
  }
  if (guard || chars === undefined) {
    return string.slice(0, trimmedRightIndex(string) + 1);
  }
  chars = (chars + '');
  if (!chars) {
    return string;
  }
  var strSymbols = stringToArray(string);
  return strSymbols.slice(0, charsRightIndex(strSymbols, stringToArray(chars)) + 1).join('');
}

module.exports = trimRight;
