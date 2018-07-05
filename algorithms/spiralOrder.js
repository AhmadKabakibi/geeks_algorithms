/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
    if (!matrix.length) {
        return [];
    }

    let rowStart = 0; 
    let rowEnd = matrix.length - 1;
    let colStart = 0;
    let colEnd = matrix[0].length - 1; 
    const results = [];

    while(rowStart <= rowEnd && colStart <= colEnd) { 
        //print the first row starting from the left boundary
        for(let i = colStart; i <= colEnd; i++){
            results.push(matrix[rowStart][i]);
        }
        //move start row down by one
        rowStart++;
        //print the the cols from the right boundary 
        for(let i = rowStart; i <= rowEnd; i++){
            results.push(matrix[i][colEnd]);
        }
        //move colEnd up by one
        colEnd--;

        //check if we exceed the boundries while we're moving up and down
        if(rowStart <= rowEnd) { 
            for(let i = colEnd; i >= colStart; i--) {
                results.push(matrix[rowEnd][i]);
            }
            rowEnd--;
        }
        if(colStart <= colEnd) { 
            for(let i = rowEnd; i >= rowStart; i--){
                results.push(matrix[i][colStart]);
            }
            colStart++;
        }
    }
    return results;
}

module.exports.spiralOrder = spiralOrder;

