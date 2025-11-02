"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var array1 = [], size = prompt("Enter the size of the array : ");
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i, "th element of the array : "))));
    }
    var result = findTheClosestNumberToZero(array1);
    console.log(result); // I know, we could've skipped the previous line (LOC 12) and called the function inside of console.log directly. But this way, we learn how to assign two types to a variable.
}
function findTheClosestNumberToZero(array1) {
    var result = Number.MAX_VALUE;
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var i = array1_1[_i];
        if (Math.abs(i) < Math.abs(result)) {
            result = i;
        }
    }
    if (result < 0 && array1.includes(Math.abs(result))) {
        return Math.abs(result);
    }
    return result;
}
main();
