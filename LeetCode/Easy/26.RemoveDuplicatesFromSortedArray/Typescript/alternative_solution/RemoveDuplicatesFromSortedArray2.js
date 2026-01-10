"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function rmDuplicates(arr1) {
    if (arr1.length < 2)
        return arr1;
    var k = 1; // since, the very first element in a sorted array would always be unique
    for (var i = 1; i < arr1.length; i++) {
        if (arr1[i] !== arr1[i - 1]) {
            arr1[k++] = arr1[i];
        }
    }
    return k;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [];
    for (var i = 0; i < size; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var result = rmDuplicates(arr1);
    console.log(result);
}
main();
