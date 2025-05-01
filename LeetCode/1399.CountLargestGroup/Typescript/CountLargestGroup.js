"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var num = Number(prompt("Enter an Integer")); // if we plan on to use the string method(refer to the javascript solution), we count remove the Number() typecast from this LOC
    var result = CLG(num);
    console.log(result);
}
function CLG(num) {
    if (num === 0) {
        return 0;
    }
    var map = {};
    var result = 0;
    for (var i = 1; i <= num; i++) {
        var tempSum = Sum(i);
        if (map[tempSum]) {
            map[tempSum] += 1;
        }
        else {
            map[tempSum] = 1;
        }
    }
    var highestCount = Math.max.apply(Math, Object.values(map));
    for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
        var i = _a[_i];
        if (map[i] === highestCount) {
            result++;
        }
    }
    return result;
}
function Sum(num) {
    var result = 0;
    while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}
main();
