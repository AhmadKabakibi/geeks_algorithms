/*
* Suppose we are given an array of n integers representing stock prices on a single day.
* We want to find a pair (buyDay, sellDay), with buyDay ≤ sellDay, such that if we bought the stock on buyDay and sold it on sellDay,
* we would maximize our profit.
* Clearly there is an O(n2) solution to the algorithm by trying out all possible (buyDay, sellDay)
* pairs and taking the best out of all of them. However, is there a better algorithm, perhaps one that runs in O(n) time?

* */

const singleSellProfit = function (prices) {
    let buy = 0, sell = 0, min = 0, profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[min]) {
            min = i;
        }
        else if (prices[i] - prices[min] > profit) {
            buy = min;
            sell = i;
            profit = prices[i] - prices[min];
        }
    }
    return {
        buy: prices[buy],
        sell: prices[sell],
        profit: profit
    }
}

module.exports.singleSellProfit = singleSellProfit;
