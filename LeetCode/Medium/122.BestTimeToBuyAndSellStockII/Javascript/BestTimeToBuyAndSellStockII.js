const prompt = require('prompt-sync')();

function maxProfit(prices) {
    var result = 0, min = 0;

    for (let i = 0;i < prices.length;i++) {
        min = prices[i];

        while (prices[i + 1] > prices[i] && i < prices.length) {
            i += 1;
        }

        result += prices[i] - min;
    }

    return result;
}

function main() {
    var pricesArray = [], sizePricesArray = Number(prompt("Enter the size of the 'prices' array : "));

    for (let i = 0;i < sizePricesArray;i++) {
        pricesArray.push(Number(prompt(`Enter the ${i + 1}th element of the 'prices' array : `)));
    }

    var result = maxProfit(pricesArray);
    console.log(result);
}

main();

/*
Story time(my train of thought at the time when I got an idea on how to solve the problem) : Unlike problem 121. ,we can buy and sell stocks multiple times thughtout the array. 
But, how do we decide that? Initially, I thought, why not just find the min and then find the max value which follows min's index(exactly the solution we used in 121.). 
But, then I took a look at the examples. And, example 2 caught my eye because in it, the user made only one set of transactions instead of doing multiples. This made me realize 
that we keep on updating the 'max' variable's value until we encounter a number lower than the current 'max' value. 
Kinda greedy don't you think ?(pun on greedy algorithm).
*/