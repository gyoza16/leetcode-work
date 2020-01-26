// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};