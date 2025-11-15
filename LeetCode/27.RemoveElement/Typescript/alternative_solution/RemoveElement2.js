"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function rmElements(arr1, target) {
    var result = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] === target) {
            arr1[i] = 101; // we do this because the contrainsts specify that the elements cannot be greater than 100
            result++;
        }
    }
    arr1.sort(function (a, b) { return a - b; });
    return arr1.length - result;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [], target = Number(prompt("Enter the target Integer : "));
    for (var i = 0; i < size; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var result = rmElements(arr1, target);
    console.log("Original Array : ".concat(arr1, ", look at the first ").concat(result, " elements."));
}
main();
/*
Learnings :-
    1. Initially, we didn't include LOC 22(we called rmElements() function directly in the console.log() function). That resulted in the user-inputed array being printed at LOC 24 (for #{arr1} part of console.log()). This is because, the ${arr1} variable is executed
    before the rmElements() function was called. Hence, we print the array before it gets mutated. So, to solve this issue, we call the funciton right before the console.log()
*/ 
