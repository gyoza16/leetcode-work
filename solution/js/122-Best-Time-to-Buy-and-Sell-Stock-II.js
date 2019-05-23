// Input: [7,1,5,3,6,4]
// Output: 7

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let profit = 0;
    for (const p of prices) {
        if (min < p) {
            profit += p - min;
        }
        min = p;
    }
    return profit;
};