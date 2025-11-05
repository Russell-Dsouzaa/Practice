import * as PromptSync from "prompt-sync"
const prompt = PromptSync();

function main() {
    var size : number = Number(prompt("Enter the size of the array : ")), prices : number[] = [];

    for (let i : number = 0;i < size;i++) {  // yea, ik, it was unnecessary to type-check 'i' since it is me myself who initializes it by hard-coding it. I still did it, because I'm trning to build good habits(to type-check every variable)
        prices.push(Number(prompt(`Enter the ${i+1}th element of the array : `)));
    }

    var result : number = maxProfit(prices);

    console.log(result);
}

function maxProfit(prices : number[]) {
    var lowestNumber : number = Number.MAX_VALUE, maxProfit : number = 0;

    for (let price of prices) {
        if (price < lowestNumber) {
            lowestNumber = price;
        }

        let difference : number = price - lowestNumber;

        if (difference > maxProfit) {
            maxProfit = difference;
        }
    }

    return maxProfit;
}

main();

/*
Learnings :-

    1. We cannot use type-checking in an 'for ... of ... ' statement/loop. I,  initially had put type-check on price variable on LOC 19 (tsc put a red-colored line under the variable)
*/