// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ret = new Set();
    for (let i=0; i<nums1.length; i++) {
        for (let j=0; j<nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                ret.add(nums1[i]);
            }
        }
    }
    return Array.from(ret);
};