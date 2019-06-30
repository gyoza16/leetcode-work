// Input: 
// ["9001 discuss.leetcode.com"]
// Output: 
// ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
// Explanation: 
// We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map();
    for (const cpdomain of cpdomains) {
        const count = Number(cpdomain.split(' ')[0]);
        const domainList = cpdomain.split(' ')[1].split('.');
        let array = [];
        for (let i=domainList.length-1; i>=0; i--) {
            array.unshift(domainList[i]);
            const s = array.join('.');
            map.set(s, (map.get(s) || 0) + count);
        }
    }
    return Array.from(map).map(function([domain, count]) { return `${count} ${domain}`; });
};