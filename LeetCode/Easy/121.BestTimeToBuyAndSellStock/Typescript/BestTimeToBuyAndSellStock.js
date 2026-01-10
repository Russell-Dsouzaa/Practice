"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var prices = [], size = Number(prompt("Enter the size of the array : "));
    for (var i = 0; i < size; i++) {
        prices[i] = Number(prompt("Enter the ".concat(i + 1, "th element of the array : ")));
    }
    var result = maxProfit(prices);
    console.log(result);
}
function maxProfit(prices) {
    var maxProfit = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        for (var j = i + 1; j < prices.length; j++) {
            if (maxProfit < prices[j] - prices[i]) {
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    return maxProfit;
}
main();
