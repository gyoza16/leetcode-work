// Input: 121
// Output: true

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (Math.sign(x) === -1 || Math.sign === -0) { return false; }
    return (x === Number(String(x).split('').reverse().join(''))) ? true : false;
};