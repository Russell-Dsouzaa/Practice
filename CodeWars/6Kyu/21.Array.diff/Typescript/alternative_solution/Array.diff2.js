"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function diff(arr1, arr2) {
    return arr1.filter(function (elem) { return !arr2.includes(elem); });
}
function main() {
    var size1 = Number(prompt("Enter the size of the first array : ")), size2 = Number(prompt("Enter the size of the second array : ")), arr1 = [], arr2 = [];
    for (var i = 0; i < size1; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the first array : "))));
    }
    for (var i = 0; i < size2; i++) {
        arr2.push(Number(prompt("Enter the ".concat(i + 1, "th element of the second array : "))));
    }
    console.log("First array : ".concat(arr1, " \n Second array : ").concat(arr2, " \n Resulting first array : ").concat(diff(arr1, arr2)));
}
if (require.main === module) {
    main();
}
/*
Learnings :-

    1. 'in' operator only checks for keys/properties in objects(maps/dictionaries(key-value paris)/sets/arrays). In key-value pairs, 'in' only checks the
    presence of 'keys' in the object. In arrays, 'in' only checks whether that index exists or not.

    For example :- temp = ["100", 200, "cedar"];
    `200 in temp` would return false.  `1 in temp` would return true. `"length" in temp` would return true (since arrays have .length property)

    So, in other words, we cannot use `arr[i] in arr2` at LOC 6
*/ 
