"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var size = Number(prompt("Enter the size of the array : ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1[i] = prompt("Enter the ".concat(i + 1, "th element of the array : "));
    }
    var result = LCP(array1);
    console.log(result);
}
function LCP(array1) {
    var shortestLength = Math.min.apply(Math, array1.map(function (str) { return str.length; })), j = 0;
    for (var i = 0; i < shortestLength; i++) {
        for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
            var str = array1_1[_i];
            if (array1[0][j] !== str[j]) {
                return array1[0].substring(0, j);
            }
            j++;
        }
    }
    return array1[0].substring(0, j);
}
main();
