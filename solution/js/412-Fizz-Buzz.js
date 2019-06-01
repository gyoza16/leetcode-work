// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ret = [];
    for (let i=1; i<n+1; i++) {
        if (i % 15 === 0) { ret.push('FizzBuzz'); continue; }
        if (i % 5 === 0) { ret.push('Buzz'); continue; }
        if (i % 3 === 0) { ret.push('Fizz'); continue; }
        ret.push(String(i));
    }
    return ret;
};