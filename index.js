const {performOps} = require("./algorithms/array_2d");
const {numSetBits} = require ("./algorithms/numSetBits");


//TEST Array2d Reversed rows


let A = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

let B = performOps(A);
for (i = 0; i < B.length; i++) {
    for (j = 0; j < B[i].length; j++)
        process.stdout.write(B[i][j]+" ");
}


//TEST numSetBits
console.log(numSetBits(11));
