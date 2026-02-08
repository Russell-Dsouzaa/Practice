"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function findSmallestInteger(arr1) {
    arr1.sort(function (a, b) { return a - b; });
    return arr1[0];
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log("The smallest element in [".concat(array1, "] is ").concat(findSmallestInteger(array1)));
}
if (require.main === module) {
    main();
}
