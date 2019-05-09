// Example 1:

// Input: [1,3,5,6], 5
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const index = Math.floor((left + right) / 2);
        const val = nums[index];
        if (val === target) {
            return index;
        }
        if (val > target) {
            right = index - 1;
        } else if (val < target) {
            left = index + 1;
        }
    }
    return left;
};

