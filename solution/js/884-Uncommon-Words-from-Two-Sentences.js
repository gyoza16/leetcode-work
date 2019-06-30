/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const words = A.split(' ').concat(B.split(' '));
    const list = {};
    for (const w of words) {
        if (list[w]) {
            list[w]++;
        } else {
            list[w] = 1;
        }
    }
    return words.filter(function(elm) { return list[elm] === 1; });
};