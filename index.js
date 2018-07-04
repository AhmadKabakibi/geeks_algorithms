const {performOps} = require("./algorithms/array_2d");
const {numSetBits} = require ("./algorithms/numSetBits");
const {areConsecutive} = require ("./algorithms/areConsecutive");
const {singleSellProfit} = require ("./algorithms/dayTradePrice");
const {isSubsetSum} = require ("./algorithms/subSetSum");
const {isSubsetSumDynamic} = require ("./algorithms/subSetSum");
const {countBits} = require ("./algorithms/bitsCount");
const {CoinChange} = require ("./algorithms/coinChange");
const {lookNSay} = require ("./algorithms/look&Say");
const {spiralOrder} = require ("./algorithms/spiralOrder");



//TEST Array2d Reversed rows


let A = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

let B = performOps(A);

for (i = 0; i < B.length; i++) {
    for (j = 0; j < B[i].length; j++)
        process.stdout.write(B[i][j]+" ");
}

console.log(" => " + B);

console.log("~~~~~~~~~~~~~~~~~~~");

//TEST numSetBits
console.log(numSetBits(11));


console.log("~~~~~~~~~~~~~~~~~~~");

//TEST areConsecutive
console.log(areConsecutive([5, 2, 3, 1, 4]));


console.log("~~~~~~~~~~~~~~~~~~~");

//TEST singleSellProfit

console.log("Prices: [23,40,21,67,1,50,22,38,2,62]");

console.log(singleSellProfit([23,40,21,67,1,50,22,38,2,62]));


console.log("~~~~~~~~~~~~~~~~~~~");

//TEST subSetSum
const arr = [17, 2, 8, 34, 4, 0.5, 42, 6, 3, 7, 15, 14, 9];

console.log(isSubsetSum([3, 34, 4, 12, 5, 2], 119));

console.log("~~~~~~~~~Dynamic~~~~~~~~~~");

console.log(isSubsetSumDynamic(arr, 20));


console.log("~~~~~~~~~~~~~~~~~~");

console.log(countBits(11));

console.log("~~~~~~~~~coin change~~~~~~~~~");

console.log(CoinChange([3, 25, 34, 38, 26, 42, 16, 10, 15, 50, 39, 44, 36, 29, 22, 43, 20, 27, 9, 30, 47, 13, 40, 33],222));
console.log(CoinChange([ 18, 24, 23, 10, 16, 19, 2, 9, 5, 12, 17, 3, 28, 29, 4, 13, 15, 8 ],458));


console.log("~~~~~~~~~lookNSay~~~~~~~~~");

console.log(lookNSay(5));

console.log("~~~~~~~~~spiralOrder~~~~~~~~~");

console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]));

  console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]));