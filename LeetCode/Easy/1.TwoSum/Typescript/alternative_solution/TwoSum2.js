"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var size = Number(prompt("Enter the size of the array : "));
    var array1 = [];
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var target = Number(prompt("Enter the target element : "));
    var result = TwoSum(array1, target);
    if (result == null) {
        console.log("No two array elements add up to ".concat(target));
    }
    else {
        console.log("Indices of the two array elements which add up to ".concat(target, " are : ").concat(result[0] + 1, " and ").concat(result[1] + 1));
    }
}
function TwoSum(arr1, target) {
    var map = {}; // we use index keyword to generalize the types of key-value pairs in js objects. Usually, we define types for each key of the object manually one by one.
    for (var i = 0; i < arr1.length; i++) {
        var complement = target - arr1[i];
        if (map[complement]) {
            return [map[complement], i];
        }
        else {
            map[arr1[i]] = i;
        }
    }
    return null;
}
main();
