/*Write a function that takes an unsigned integer and returns the number of 1 bits it has.

    Example:

The 32-bit integer 11 has binary representation

00000000000000000000000000001011
so the function should return 3.*/

const countBits = function (num) {
    return num.toString(2).split('').reduce(function (count, el) {
        return count + (el == "1");
    }, 0);
}

module.exports.countBits = countBits;
