"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function numOfBadPairs(arr1) {
    var goodPairCount = 0, totalPairs = arr1.length * (arr1.length - 1) / 2; // dw, it doesn't matter whether division occurs before or after multiplication
    for (var i = 0; i < arr1.length - 1; i++) {
        for (var j = i + 1; j < arr1.length; j++) {
            if (j - i === arr1[j] - arr1[i]) { // to check for good pairs instead of bad pairs, replace !== with ===
                goodPairCount++;
            }
        }
    }
    return totalPairs - goodPairCount;
}
function main() {
    var array1 = [], size = Number(prompt("Enter the size of the array : "));
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log("The number of bad pairs in the given array is : ".concat(numOfBadPairs(array1)));
}
main();
/*
    Learnins :-
    
    1. Another way to solve this LeetCode porblem, is to, count the number of Good Pairs and subtract it from the total number of pairs. To get the number of good pairs, Change !== to === at LOC 8.
    To get the total number of pairs where i < j : n * (n - 1) / 2 (where n = array1.length)
*/
