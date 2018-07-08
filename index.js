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
const {simplifyPath} = require ("./algorithms/simplifyPath");
const {tripletSumZero} = require ("./algorithms/tripletSum");
const {tripletSumValue} = require ("./algorithms/tripletSum");
const {numDecodings} = require ("./algorithms/numDecodings");
const {palindrome} = require ("./algorithms/palindromes");
const {nthMagicNo} = require ("./algorithms/nthMagicNo");


const findTheRunningMedian = require ("./algorithms/findRunningMeadian");



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

  console.log(simplifyPath("/a/b/c/d/e/f/g/.././.././.././"));


  console.log(findTheRunningMedian(['6', '12', '4', '5', '3', '8', '7']));

  console.log(findTheRunningMedian(["10","1","2","3","4","5","6","7","8","9","10"]));


  console.log("~~~~~~~~~tripletSumZero~~~~~~~~~");
  console.log(tripletSumZero([0, -1, 2, -3, 1]));

  console.log("~~~~~~~~~tripletSumValue~~~~~~~~~");
  console.log(tripletSumValue([1, 4, 45, 6, 10, 8], 19));
  console.log(tripletSumValue([1, 4, 45, 6, 10, 8], 22));


  console.log("~~~~~~~~~numDecodings~~~~~~~~~");

  console.log("Input: 226");
  console.log("Output: 3");
  console.log("  Explanation: It could be decoded as 'B' (2 26), 'VF' (22 6), or 'BBF' (2 2 6).')")
  console.log(numDecodings("226"));
  console.log(numDecodings("4757562545844617494555774581341211511296816786586787755257741178599337186486723247528324612117156948"));


  console.log("~~~~~~~~~palindrome~~~~~~~~~");

  console.log(palindrome("A man, a plan, a canal. Panama"));


  console.log("~~~~~~~~~nthMagicNo~~~~~~~~~");
  console.log(nthMagicNo(5));
  console.log(nthMagicNo(2));