// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let previous = 0;
    let beforePrevious = 0;
    for (let i=0; i<nums.length; i++) {
        let tmp = previous;
        previous = Math.max(nums[i] + beforePrevious, previous);
        beforePrevious = tmp;
    }
    return previous;
};