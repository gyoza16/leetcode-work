/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const ret = [];
    for (const word of words) {
        if (
            /^[qwertyuiop]*$/i.test(word) ||
            /^[asdfghjkl]*$/i.test(word) ||
            /^[zxcvbnm]*$/i.test(word)
        ) {
            ret.push(word);
        }
    }
    return ret;
};