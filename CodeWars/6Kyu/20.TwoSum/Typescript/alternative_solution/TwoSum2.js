"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function twoSum(arr, tar) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        if ((tar - arr[i]) in map) { // we could also use map.has() instead
            return [map[tar - arr[i]], i];
        }
        map[arr[i]] = i;
    }
    return [-1, -1];
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [], target = Number(prompt("Enter the target element : "));
    for (var i = 0; i < size; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log("The indices of array elements which add up to ".concat(target, " are : ").concat(twoSum(arr1, target)));
}
if (require.main === module) {
    main();
}
