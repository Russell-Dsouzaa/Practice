"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function countDup(array1) {
    var map = {}, result = 0;
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var i = array1_1[_i];
        if (i.toLowerCase() in map) {
            map[i.toLowerCase()] += 1;
        }
        else {
            map[i.toLowerCase()] = 1;
        }
    }
    for (var _a = 0, _b = Object.keys(map); _a < _b.length; _a++) {
        var i = _b[_a];
        if (map[i] > 1) {
            result++;
        }
    }
    return result;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [];
    for (var i = 0; i < size; i++) {
        arr1.push(prompt("Enter the ".concat(i + 1, "th element of the array : ")));
    }
    var result = countDup(arr1);
    console.log("The number of elements having more than 1 occurance is : ".concat(result));
}
if (require.main === module) {
    main();
}
/*
Learnings :-

    1. Initially, I had wrapped up prompt() within Number() class (there was no need to do that do, I did it out of muscle memory). This caused an error in `countDup` function, wherever I had used
    .toLowerCase() string method. This happened because at LOC 27, I wAS converting each input element to a Number and then later on, in `countDup` function, I was running .toLowerCase() method on them.
*/ 
