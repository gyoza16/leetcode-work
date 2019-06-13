// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const odd = [], even = [], result = [];
    for (const a of A) {
        if (a % 2 === 0) {
            odd.push(a);
        } else {
            even.push(a);
        }
    }
    for (let i=0; i<odd.length; i++) {
        result.push(odd[i]);
        result.push(even[i]);
    }
    return result;
};