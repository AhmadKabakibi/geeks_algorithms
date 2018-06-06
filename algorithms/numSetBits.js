/*
* Function that takes an unsigned integer and returns the number of 1 bits it has.
Example:
The 32-bit integer 11 has binary representation
00000000000000000000000000001011
so the function should return 3.
* */

const numSetBits = function (number) {
    let newArr = number.toString(2).split('').map(Number);
    let count = 0;
    for (let i = 0; i < newArr.length; i++)
        count += newArr[i];
    return count;
}


module.exports.numSetBits = numSetBits;
