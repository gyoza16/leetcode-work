// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = -Infinity;
    let second = -Infinity;
    let maxIndex = 0;
    for (const [i, n] of nums.entries()) {
        if (n > max) {
            second = max;
            max = n;
            maxIndex = i;
        } else if (n > second) {
            second = n;
        }
    }
    if (max >= (second * 2)) {
        return maxIndex;
    }
    return -1;
};