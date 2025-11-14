"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function Conc(arr1) {
    var ptr1 = 0, ptr2 = arr1.length, result = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        result[ptr1++] = i;
        result[ptr2++] = i;
    }
    return result;
}
function main() {
    var arr1 = [], size = Number(prompt("Enter the size of the array : "));
    for (var i = 0; i < size; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var result = Conc(arr1);
    console.log(result);
}
main();
