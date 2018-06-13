/*
* Suppose we are given an array of n integers representing stock prices on a single day.
* We want to find a pair (buyDay, sellDay), with buyDay ≤ sellDay, such that if we bought the stock on buyDay and sold it on sellDay,
* we would maximize our profit.
* Clearly there is an O(n2) solution to the algorithm by trying out all possible (buyDay, sellDay)
* pairs and taking the best out of all of them. However, is there a better algorithm, perhaps one that runs in O(n) time?
* */

const singleSellProfit = function (prices) {
    let buyDay = 0, sellDay = 0, min = 0, profit = 0;
    for (let i = 0; i < prices.length; i++) {

        //checks to see if the given element is smaller than the minimum buying price
        if (prices[i] < prices[min]) {
            //the minimum buying price index, (min), is updated to be the index of that element
            min = i;
        }
        //check the difference between the current element and the minimum buying price is greater than the current profit
        else if (prices[i] - prices[min] > profit) {
            //the profit is updated to that difference and buy is set to prices[min] and sell is set to prices[i]
            buyDay = min;
            sellDay = i;
            profit = prices[i] - prices[min];
        }
    }
    return {
        buyDay: prices[buyDay],
        sellDay: prices[sellDay],
        profit: profit
    }
}

module.exports.singleSellProfit = singleSellProfit;
