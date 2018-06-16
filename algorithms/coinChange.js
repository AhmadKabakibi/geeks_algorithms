/*
    * Given a value N, if we want to make change for N cents, and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins,
    * how many ways can we make the change? The order of coins doesn’t matter.
    * For example, for N = 4 and S = {1,2,3}, there are four solutions: {1,1,1,1},{1,1,2},{2,2},{1,3}. So output should be 4.
    * For N = 10 and S = {2, 5, 3, 6}, there are five solutions: {2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}. So the output should be 5.
*/


const CoinChange = function (coins, change) {
    //Time complexity of this function: O(n*change)
    //Space Complexity of this function: O(n)

    // table[i] will be storing the number of solutions
    // for value i. We need change + 1 rows as the table is
    // constructed in bottom up manner using the base
    // case (change = 0)
    // Initialize all table values as 0

    let table = new Array(change + 1).fill(0); // O(n)

    // Base case (If given value is 0)
    table[0] = 1;

    // Pick all coins one by one and update the table[]
    // values after the index greater than or equal to
    // the value of the picked coin
    for (let i=0; i<coins.length; i++)
    for (let j=coins[i]; j<=change; j++)
    table[j] += table[j-coins[i]];

    return table[change];
}


module.exports.CoinChange = CoinChange;
