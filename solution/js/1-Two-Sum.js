// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    for (const [i, n] of nums.entries()) {
        const suppliment = target - n;
        if (map.has(suppliment)) {
            return [map.get(suppliment), i];
        }
        map.set(n, i);
    }
};

