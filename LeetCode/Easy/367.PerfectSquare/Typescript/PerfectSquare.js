"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function perfectSquare(num) {
    for (var i = 0; i * i <= num; i++) { // make sure to put '<=' instead of just '<', otherwise the loop might not execute for the condition when i * i == num
        if (i * i === num) {
            return true; // if incase, we would want also want to know the square root of 'num', we could just return 'i'
        }
    }
    return false;
}
function main() {
    var num = Number(prompt("Enter an Integer : "));
    var result = perfectSquare(num);
    if (result) {
        console.log("".concat(num, " is a perfect square :)"));
    }
    else {
        console.log("".concat(num, " is not a perfect square :("));
    }
}
main();
/*
Learnings :-

    1. At LOC 6, if incase, we would want also want to know the square root of 'num', we could just return 'i'
    2. At LOC 4, make sure to put '<=' instead of just '<', otherwise the loop might not execute for the condition when i * i == num
*/ 
