// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length -1;
    while (start <= end) {
        const mid = ((start + start) / 2) | 0;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        }
    }
    return -1;
};