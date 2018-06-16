/*
* Problem: Given a sequence of nonnegative integers A and an  integer T, return whether there is a *continuous sequence* of A
* that sums up to exactly T Example: [23, 5, 4, 7, 2, 11], 20. Return True because 7 + 2 + 11 = 20 [1, 3, 5, 23, 2], 8.
* Return True because 3 + 5 = 8 [1, 3, 5, 23, 2], 7 Return False because no sequence in this sequenceay adds up to 7
* Note: We are looking for an O(N) solution. There is an obvious O(N^2) solution which is a good starting point
* but is not the final solution we are looking for. It’s important for the code to be as efficient as possible.
* */

// A recursive solution for subset sum problem
const isSubsetSum = function (sequence, sum) {
    // Base Cases
    if (sum === 0) {
        return true;
    }
    if (sequence.length === 0 && sum !== 0) {
        return false;
    }
    // If last element is greater than sum, then ignore it
    if (sequence[sequence.length - 1] > sum) {
        return isSubsetSum(sequence.slice(0, -1), sum);
    }
    /* else, check if sum can be obtained
    by any of the following
    (a) including the last element
    (b) excluding the last element */
    return isSubsetSum(sequence.slice(0, -1), sum) || isSubsetSum(sequence.slice(0, -1), sum - sequence[sequence.length - 1]);
}

// A Dynamic Programming solution for subset sum problem
const isSubsetSumDynamic = function (sequence, sum) {
    let matrix = [];

    // fills out first column
    for (let i = 0; i < sequence.length; i++){
        matrix.push([1]);
    }

    // fills out first row
    for (let q = 1; q <= sum; q++){
        matrix[0][q] = (q === sequence[0]) ? 1 : 0;
    }

    // fills out matrix in a bottom up format

    for (let j = 1; j < sequence.length; j++) {
        for (let k = 1; k <= sum; k++)
            // if the value at left is greater than the sum, that value cannot be
            // included in the subset - we will therefore only check for if we do not
            // include it in the subset
            if (k - sequence[j] < 0) {
                matrix[j][k] = matrix[j - 1][k];
            }
            else {
                matrix[j][k] = matrix[j - 1][k] || matrix[j - 1][k - sequence[j]];
            }

    }
    return matrix[sequence.length - 1][sum];
}

module.exports.isSubsetSum = isSubsetSum;
module.exports.isSubsetSumDynamic = isSubsetSumDynamic;

