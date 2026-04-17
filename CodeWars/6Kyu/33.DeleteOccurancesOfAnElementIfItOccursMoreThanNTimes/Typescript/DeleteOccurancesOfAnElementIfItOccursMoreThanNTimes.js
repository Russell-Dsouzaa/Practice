"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function DEL(arr1, n) {
    var removals = [], map = {}, result = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        if (i in map) {
            map[i] += 1;
        }
        else {
            map[i] = 1;
        }
        if (map[i] > n) {
            removals.push(i);
        }
        if (removals.includes(i)) {
            continue;
        }
        else {
            result.push(i);
        }
    }
    return result;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [], N = Number(prompt("Enter the value of 'N' : "));
    for (var i = 0; i < size; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log("Modified array : ".concat(DEL(arr1, N)));
}
if (require.main === module) {
    main();
}
