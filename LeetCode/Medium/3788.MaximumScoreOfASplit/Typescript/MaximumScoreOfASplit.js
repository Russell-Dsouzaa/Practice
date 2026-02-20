"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
// const runningSum : any = require('../../../Easy/1480.RunningSum/Typescript/RunningSum.ts');
var RunningSum_1 = require("../../../Easy/1480.RunningSum/Typescript/RunningSum");
function maximumSplit(arr1) {
    var max = -Infinity, prefixSum = (0, RunningSum_1.default)(__spreadArray([], arr1, true)), suffixMin = new Array(arr1.length); // when we pass an array to a function, it is passed by reference (i.e. the original array is passed)
    suffixMin[arr1.length - 1] = Infinity; // this is because there aren't any elements after the very last element, so we cannot calculate minSuffix for the very last element of 'nums' array
    for (var i = arr1.length - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], arr1[i + 1]);
    }
    for (var i = 0; i < arr1.length - 1; i++) {
        var temp = prefixSum[i] - suffixMin[i];
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log("The maximum split is : ".concat(maximumSplit(array1)));
}
if (require.main === module) {
    main();
}
