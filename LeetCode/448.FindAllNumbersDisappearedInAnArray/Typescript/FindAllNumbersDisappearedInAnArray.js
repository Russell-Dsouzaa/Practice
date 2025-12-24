"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function DisappearedNumbers(array1) {
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var i = array1_1[_i];
        if (array1[Math.abs(i) - 1] > 0) {
            array1[Math.abs(i) - 1] = -array1[Math.abs(i) - 1];
        }
    }
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
}
function main() {
    var array1 = [], size = Number(prompt("Enter the size of the array : "));
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the #".concat(i + 1, "th element of the arrayb : "))));
    }
    var result = DisappearedNumbers(array1);
    console.log(result);
}
main();
