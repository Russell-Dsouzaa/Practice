"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function finalPrices(prices) {
    var result = [];
    for (var i = 0; i < prices.length; i++) { // we go upto prices.length - 2 (i.e second-last element of the array)  (I removed the -1 from the conditional, this comment line has now become redundant)
        var discount = 0;
        for (var j = i + 1; j < prices.length; j++) {
            if (prices[j] < prices[i]) {
                discount = prices[j];
                break;
            }
        }
        result[i] = prices[i] - discount; // we initially put this LOC at LOC 11, but then, array elements where discount was 0 weren't being added to the 'result' array
    }
    return result;
}
function main() {
    var prices = [], size = Number(prompt("Enter the size of the 'prices' array : "));
    for (var i = 0; i < size; i++) {
        prices.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log("Original array : ".concat(prices, " \n Final Array : ").concat(finalPrices(prices)));
}
main();
/*
Learnings :-

    1. I just realized that we could, if we wish, modify the origianl array and not have to return anything. But since, the LeetCode problem requires us to return an array, we will create a
    separate array instead.

    2. At LOC 6, the contion within the for-loop was i < prices.length - 1, so as to not visit the last element since there won't be any discounts for it. But that resulted in the last element
    not being added to the 'result' array
*/ 
