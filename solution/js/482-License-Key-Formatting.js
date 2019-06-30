/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.replace(/-/g, '').toUpperCase();
    let l = S.length;
    let str = '';
    let counter = 0;
    while (l--) {
        str += S[l]
        counter++;
        if (counter === K && l !== 0) {
            str += '-';
            counter = 0;
        }
    }
    return str.split('').reverse().join('');
};