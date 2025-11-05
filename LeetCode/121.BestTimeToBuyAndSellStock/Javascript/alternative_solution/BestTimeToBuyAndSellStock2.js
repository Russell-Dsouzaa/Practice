const prompt = require("prompt-sync")();

function maxProfit(prices) {
    var maxProfit = 0, lowestNumber = Infinity; // We could've used Number.MIN_VALUE either (Initially, I typed Math.MAX_VALUE instead of Number.MAX_VALUE)

    for (let price of prices) {
        if (price < lowestNumber) {
            lowestNumber = price;
        }

        let difference = price - lowestNumber;

        if (difference > maxProfit) {
            maxProfit = difference;
        }
    }

    return maxProfit;
}

function main() {
    var prices = [], size = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        prices.push(Number(prompt(`Enter the ${i+1}th element of the array : `)));
    }

    console.log(maxProfit(prices));
}

main();


/*
Learnings :-

    1. Math.max() is different than Number.MAX_VALUE, Math.max() returns the largest value from multiple comma seprated 
    inputs(I wrote it this way deliberately because Math.max() doesn't accept arrays as input since it expects
     multiple values (wait, I wonder whether it would word if we provided it multiple arrays)) while Number.MAX_VALUE is the hihest integer value
*/