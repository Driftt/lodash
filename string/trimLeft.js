var charsLeftIndex = require('../internal/charsLeftIndex'),
    stringToArray = require('../internal/stringToArray'),
    toString = require('../lang/toString'),
    trimmedLeftIndex = require('../internal/trimmedLeftIndex');

/**
 * Removes leading whitespace or specified characters from `string`.
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
 * _.trimLeft('  abc  ');
 * // => 'abc  '
 *
 * _.trimLeft('-_-abc-_-', '_-');
 * // => 'abc-_-'
 */
function trimLeft(string, chars, guard) {
  string = toString(string);
  if (!string) {
    return string;
  }
  if (guard || chars === undefined) {
    return string.slice(trimmedLeftIndex(string));
  }
  chars = (chars + '');
  if (!chars) {
    return string;
  }
  var strSymbols = stringToArray(string);
  return strSymbols.slice(charsLeftIndex(strSymbols, stringToArray(chars))).join('');
}

module.exports = trimLeft;
