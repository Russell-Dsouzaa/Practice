"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function singleNumber(arr) {
    var map = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (i in map) {
            map[i]++;
        }
        else {
            map[i] = 1;
        }
    }
    for (var _a = 0, _b = Object.keys(map); _a < _b.length; _a++) {
        var i = _b[_a];
        if (map[i] < 2) {
            return Number(i);
        }
    }
    return -1;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log("The element which appears only once is : ".concat(singleNumber(arr)));
}
if (require.main === module) {
    main();
}
