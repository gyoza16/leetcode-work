// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let counter = 0;
    for (let i=0; i<nums.length; i++) {
        let val = nums[i];
        if (val !== 0) {
            nums[counter] = val;
            counter++;
        }
    }
    for (; counter<nums.length; ) {
        nums[counter] = 0;
        counter++;
    }
};
