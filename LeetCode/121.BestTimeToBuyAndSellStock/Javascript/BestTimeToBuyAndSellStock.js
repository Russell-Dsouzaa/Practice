const prompt = require('prompt-sync')();

function maxProfit(prices) {
    let maxProfit = 0; // we can define(create) variables having the same name as a function since we don't call the function by puttins parenthesis () at the end of the variable name

    for (let i = 0;i < prices.length - 1;i++) {
        for (let j = i + 1;j < prices.length;j++) {
            let difference = prices[j] - prices[i]; // ik, we could've skipped this step. I did this to make the code more readable
        
            if (difference > maxProfit) {
                maxProfit = difference;
            }
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
    1. We can name variables after custom(user-defined) functions, LOC 4
*/