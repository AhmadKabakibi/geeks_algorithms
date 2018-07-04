/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
    if (!matrix.length) {
        return [];
    }

    const hs = matrix[0].length;
    const vs = matrix.length;
    let er = 0; // end row
    let ec = hs - 1; // end column
    let sc = 0; // start column
    let sr = 0; // start row
    let rightOffset = 2;
    const results = [];

    while (results.length < vs * hs) {
        for (let i = sc; i <= ec; i++) { // going right
            matrix[sr][i] !== undefined && results.push(matrix[sr][i]);
        }

        // set up for down
        sr++;
        sc = ec;
        er = vs - sr;

        if (results.length === vs * hs) {
            break;
        }
        for (let i = sr; i <= er; i++) { // going down
            matrix[i][sc] !== undefined && results.push(matrix[i][sc]);
        }

        // set up for left
        sr = er;
        ec = hs - 1 - sc;
        sc--;

        if (results.length === vs * hs) {
            break;
        }

        for (let i = sc; i >= ec; i--) { // going left
            matrix[sr][i] !== undefined && results.push(matrix[sr][i]);
        }

        if (results.length === vs * hs) {
            break;
        }
        // set up for up
        er = vs - sr;
        sc = ec;
        sr--;

        for (let i = sr; i >= er; i--) { // going up
            matrix[i][sc] !== undefined && results.push(matrix[i][sc]);
        }

        if (results.length === vs * hs) {
            break;
        }
        // set up for right
        sc = ec + 1;
        sr = er;
        ec = hs - rightOffset;
        rightOffset++;
    }

    return results;
};

module.exports.spiralOrder = spiralOrder;