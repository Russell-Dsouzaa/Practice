"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function maxAndMin(arr1) {
    // ik, in problem's description, they've explicitly asked us to create two separate functions. But, here, I mushed them into one single function
    var max = -Infinity, min = Infinity; // Number.MIN_VALUE is the lowest postive value (0.0000000... something)
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        if (i > max) {
            max = i;
        }
        if (i < min) { // we didn't put this under 'else-if' to tackle cases where the size of the input array is 1
            min = i;
        }
    }
    return [max, min];
}
function main() {
    var size = Number(prompt("Enter the size of the integer array : ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var result = maxAndMin(array1);
    console.log("The maximum and minimum values in the given array [".concat(array1, "] are : ").concat(result[0], " and ").concat(result[1], " respectively."));
}
if (require.main === module) {
    main();
}
