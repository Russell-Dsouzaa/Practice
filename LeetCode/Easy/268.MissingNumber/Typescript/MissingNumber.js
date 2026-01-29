"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function missingNum(nums) {
    var sumOfNNaturalNumbers = (nums.length * (nums.length + 1)) / 2, runningSum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var i = nums_1[_i];
        runningSum += i;
    }
    return sumOfNNaturalNumbers - runningSum;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array(start from 0, we assume some input arrays can contain 0) : "))));
    }
    var result = missingNum(array1);
    console.log("The missing number is ".concat(result, ", while the size of the supposed array is ").concat(size + 1));
}
main();
