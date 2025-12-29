"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function maxProfit(prices) {
    var result = 0, min = 0;
    for (var i = 0; i < prices.length; i++) {
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
    for (var i = 0; i < sizePricesArray; i++) {
        pricesArray.push(Number(prompt("Enter the ".concat(i + 1, "th element of the 'prices' array : "))));
    }
    var result = maxProfit(pricesArray);
    console.log(result);
}
main();
