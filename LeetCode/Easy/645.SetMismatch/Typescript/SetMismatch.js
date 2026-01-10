"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function findErrorNums(arr1) {
    var missingElem = (arr1.length * (arr1.length + 1)) / 2, set1 = new Set(), dup = arr1[0];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        missingElem -= i;
        if (set1.has(i)) {
            dup = (i);
        }
        else {
            set1.add(i);
        }
    }
    return [dup, missingElem + dup];
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [];
    for (var i = 0; i < size; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var result = findErrorNums(arr1);
    console.log("The duplicate element is : ".concat(result[0], " while the number which was lost is : ").concat(result[1]));
}
main();
/*
Learnings :-

    1. In Typescript, we set a set's type as 'var1 : Set<your_datatype>'
*/ 
