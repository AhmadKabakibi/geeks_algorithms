/* 
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example:
Given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
For this problem, return the maximum sum.
*/

module.exports = {
    //Time complexity  O(n)
    findMaxSum: function(array) { 
        let currectMaxSum;
        let globalMaxSum;

        currectMaxSum = globalMaxSum = array[0];

        for(let i=0;i<array.length;i++){
            currectMaxSum = Math.max(currectMaxSum, currectMaxSum + array[i])
        }
        if(currectMaxSum > globalMaxSum) {
            globalMaxSum = currectMaxSum;
        }
        return globalMaxSum;
    }
};