"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function count(arr1) {
    var falseCount = 0;
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        if (i !== true) {
            falseCount++;
        }
    }
    return arr1.length - falseCount;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [];
    for (var i = 0; i < size; i++) {
        arr1.push((prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var cleanedArr = arr1.map(function (elem) { return elem.toLowerCase() === 'true'; });
    console.log(count(cleanedArr));
}
if (require.main === module) {
    main();
}
/*
Learnings :-

    1. At LOC 20, using Boolean(prompt()) considers 'false' as true, it considers non-empty strings as true and empty strings as false. So it doesn't work as we intended.

*/ 
