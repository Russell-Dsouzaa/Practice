"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var s = prompt("Enter the first string : "), t = prompt("Enter the second string : ");
    var result = isSubsequence(s, t); // we use this variable instead of directly calling this function in cocnsole.log() function, because I wanted to use type-checking
    console.log(result);
}
function isSubsequence(s, t) {
    if (s === t) {
        return true;
    }
    else if (t.length < s.length) {
        return false;
    }
    var i = 0;
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var j = t_1[_i];
        if (s[i] === j) {
            i++;
        }
    }
    if (i === s.length) {
        return true;
    }
    else {
        return false;
    }
}
main();
