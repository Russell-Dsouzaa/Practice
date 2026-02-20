"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function runningSum(arr) {
    // var result : number[] = [];  // we could modify the original array and then return it(to satisfy the requirement of return a number array) or we could create a separate array and modify it
    for (var i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1];
    }
    return arr;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var result = runningSum(arr);
    console.log("Original array : ".concat(arr, " \n Running Sum of it : ").concat(result)); // original and runningSum arrays both are being printed the same. To fix this, call the runingSum() function at LOC 23 inplace of 'result' (just as we did in the Javascript solution)
}
if (require.main === module) {
    main();
}
exports.default = runningSum;
/*
Learnings :-

    1. The reason why, at LOC 21, original array is NOT the same as runningSum array, is because the function 'runningSum()' is being called after 'arr' is already evaluated/prinited onto the console.
*/ 
