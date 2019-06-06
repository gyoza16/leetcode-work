// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    const sList = S.split('');
    const ret = [];
    let prev;
    
    prev = -Infinity;
    for (let i=0; i<sList.length; i++) {
        if (sList[i] === C) { prev = i; }
        ret[i] = i - prev;
    }
    
    prev = Infinity;
    for (let i=sList.length-1; i>=0; --i) {
        if (sList[i] === C) { prev = i; }
        ret[i] = Math.min(ret[i], prev - i);
    }
    return ret;
};