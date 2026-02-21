"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function twoSum(arr, tar) {
    for (var i = 0; i < arr.length - 1; i++) { // In the probelm description, it says that 'it should find two different items...', hence we stop the outer loop at the second last element
        for (var j = i + 1; j < arr.length; j++) {
            if (tar === arr[i] + arr[j]) {
                return [i, j];
            }
        }
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
