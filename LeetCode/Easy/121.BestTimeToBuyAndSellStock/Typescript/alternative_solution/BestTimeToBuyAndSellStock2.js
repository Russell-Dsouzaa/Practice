"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var size = Number(prompt("Enter the size of the array : ")), prices = [];
    for (var i = 0; i < size; i++) { // yea, ik, it was unnecessary to type-check 'i' since it is me myself who initializes it by hard-coding it. I still did it, because I'm trning to build good habits(to type-check every variable)
        prices.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var result = maxProfit(prices);
    console.log(result);
}
function maxProfit(prices) {
    var lowestNumber = Number.MAX_VALUE, maxProfit = 0;
    for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
        var price = prices_1[_i];
        if (price < lowestNumber) {
            lowestNumber = price;
        }
        var difference = price - lowestNumber;
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
