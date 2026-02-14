"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function sumArray(array1) {
    if (!Array.isArray(array1) || array1.length < 2) { // we initially has LHS contional and RHS conditional interchanged. Then, teh compiler raised an error saying that "there is no /length property on null values" (this was for cases where input was null/not even an array object). To solve this, we put the check for whether the input is an array or not, first
        return 0;
    }
    var result = 0, min = Infinity, max = -Infinity;
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var i = array1_1[_i];
        result += i;
        if (i < min) {
            min = i;
        }
        if (i > max) {
            max = i;
        }
    }
    return result - min - max;
}
function main() {
    var array1 = [], size = Number(prompt("Enter the size of the array : "));
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log(sumArray(array1));
}
if (require.main === module) {
    main();
}
/*
Learnings :-

    1. At LOC 5, we initially has LHS contional and RHS conditional interchanged. Then, teh compiler raised an error saying that "there is no /length property on null values" (this was for cases where input was null/not even an array object). To solve this, we put the check for whether the input is an array or not, first
*/ 
