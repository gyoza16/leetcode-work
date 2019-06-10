// Input: 123
// Output: 321

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let output = 0;
    const reverse = (x) => Number(String(x).split('').reverse().join(''))
    if (x >= 0) {
        output = reverse(x);
    } else {
        output = -reverse(Math.abs(x));
    }
    if (output >= (2**31-1) || output <= (-(2**31))) {
        return 0;
    } else {
        return output;
    }
};