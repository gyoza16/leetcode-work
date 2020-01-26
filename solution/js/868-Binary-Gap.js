// Input: 22 in binary is 0b10110.
// Output: 2

/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  return Math.max(
      0,
      ...N.toString(2)
          .split(1)
          .slice(1, -1)
          .map((gap) => gap.length + 1)
  )
};