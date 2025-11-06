"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function summaryRanges(array1) {
    var start = array1[0], end = array1[0], result = [];
    for (var i = 0; i < array1.length - 1; i++) {
        if (array1[i + 1] === array1[i] + 1) {
            end = array1[i + 1]; // at all places, when we update the value in 'start' or 'end' variables, we assign them 'array1[i + 1' instead of 'array1[i] + 1'. This is because, the next element after the range might be more than 1 step ahead of the current value, in which case, array1[i] + N should be used (in other words, we cannot assume N to be 1)
        }
        else {
            if (start === end) {
                result.push("".concat(start));
            }
            else {
                result.push("".concat(start, " -> ").concat(end));
            }
            start = array1[i + 1];
            end = array1[i + 1];
        }
    }
    if (start === end) {
        result.push("".concat(start));
    }
    else {
        result.push("".concat(start, " -> ").concat(end));
    }
    return result;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1[i] = Number(prompt("Enter the ".concat(i + 1, "th element of the array : ")));
    }
    var result = summaryRanges(array1);
    console.log(result);
}
main();
/*
Learnings :-
    1. at all places, when we update the value in 'start' or 'end' variables, we assign them 'array1[i + 1' instead of 'array1[i] + 1'.
    This is because, the next element after the range might be more than 1 step ahead of the current value, in which case, array1[i] + N should
    be used (in other words, we cannot assume N to be 1).
*/ 
