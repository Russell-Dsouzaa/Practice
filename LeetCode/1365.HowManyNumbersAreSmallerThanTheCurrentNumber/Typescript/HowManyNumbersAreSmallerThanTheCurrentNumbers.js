"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function count(array1) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        var temp = 0;
        for (var j = 0; j < array1.length; j++) {
            if (array1[j] < array1[i]) {
                temp++;
            }
        }
        result.push(temp);
    }
    return result;
}
function main() {
    var arr1 = [], size = Number(prompt("Enter the size of the array : "));
    for (var i = 0; i < size; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i, "th element of the array : "))));
    }
    var result = count(arr1);
    console.log(result);
}
main();
