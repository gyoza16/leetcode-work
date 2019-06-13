// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const even = [], odd = [];
    for (const a of A) {
        if (a % 2 === 0) {
            even.push(a);
        } else {
            odd.push(a);
        }
    }
    return even.concat(odd);
};