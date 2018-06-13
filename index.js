const {performOps} = require("./algorithms/array_2d");
const {numSetBits} = require ("./algorithms/numSetBits");
const {areConsecutive} = require ("./algorithms/areConsecutive");
const {singleSellProfit} = require ("./algorithms/dayTradePrice");


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



