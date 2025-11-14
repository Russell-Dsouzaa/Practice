"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function Conc(arr1) {
    return __spreadArray(__spreadArray([], arr1, true), arr1, true);
}
function main() {
    var arr1 = [], size = Number(prompt("Enter the size of the array : "));
    for (var i = 0; i < size; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log(Conc(arr1));
}
main();
