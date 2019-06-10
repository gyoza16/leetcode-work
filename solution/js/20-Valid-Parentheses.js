// Input: "()"
// Output: true

// Input: "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var hash = {
        '[': ']',
        '{': '}',
        '(': ')'
    };
    const mustHave = [];
    for (const str of s) {
        if (hash[str]) {
            mustHave.unshift(hash[str]);
        } else {
            if (str !== mustHave[0]) {
                return false;
            }
            mustHave.shift();
        }
    }
    return mustHave.length ? false : true;
};