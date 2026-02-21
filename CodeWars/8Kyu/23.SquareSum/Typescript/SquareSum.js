"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function squareSum(arr) {
    var result = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        result += i * i;
    }
    return result;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log(squareSum(arr));
}
if (require.main === module) {
    main();
}
