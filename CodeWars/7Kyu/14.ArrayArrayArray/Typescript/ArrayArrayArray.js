"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function explode(arr1) {
    var result = [], score = 0;
    if (typeof (arr1[0]) === 'number' && typeof (arr1[1]) === 'number') {
        score = arr1[0] + arr1[1];
    }
    else if (typeof (arr1[0]) === 'number') {
        score = arr1[0];
    }
    else if (typeof (arr1[1]) === 'number') {
        score = arr1[1];
    }
    else {
        return "Void!";
    }
    for (var i = 0; i < score; i++) {
        result.push(arr1);
    }
    return result;
}
function main() {
    var arr = [];
    for (var i = 0; i < 2; i++) {
        arr[i] = prompt("Enter the ".concat(i + 1, "th element of the array : "));
    }
    // we convert the strings representing numbers, into numbers
    arr = arr.map(function (elem) {
        var num = Number(elem);
        return Number.isNaN(num) ? elem : num;
    });
    console.log(explode(arr));
}
if (require.main === module) {
    main();
}
