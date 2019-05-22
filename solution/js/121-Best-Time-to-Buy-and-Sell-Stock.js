// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity, benefit = 0;
    for (const p of prices) {
        if (min > p) {
            min = p;
        } else {
            benefit = Math.max(benefit, p - min);
        }
    }
    return benefit;
};