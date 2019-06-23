// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]] 
// Explanation: The first 3 pairs are returned from the sequence: 
//              [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    var pairs = [];
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            pairs.push([n1, n2]);
        }
    }
    return pairs.sort(function(a, b) { 
        return (a[0] + a[1]) - (b[0] + b[1]); 
    }).slice(0, k);
};