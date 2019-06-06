// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const ret = [];
    for (const word of s.split(' ')) {
        ret.push(word.split('').reverse().join(''));
    }
    return ret.join(' ');
};