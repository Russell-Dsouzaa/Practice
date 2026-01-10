"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function isValid(str) {
    if (str.length % 2 !== 0) {
        return false;
    }
    else if (str[0] === ')' || str[0] === ']' || str[0] === '}') {
        return false;
    }
    var stack = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        if (i === '(' || i === '[' || i === '{') {
            stack.push(i);
        }
        else {
            if (i === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            }
            else if (i === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            }
            else if (i === '}' && stack[stack.length - 1] === '{') {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    else {
        return true;
    }
}
function main() {
    var str = prompt("Enter a string : ");
    var result = isValid(str);
    console.log(result);
}
main();
/*
Learnings :-
    1. At LOC 13, I tried type annotating the variable 'i'. Apparently, we cannot use type annotations in for..of loop (not sure whether we could type-annotate in for...in loop)
*/ 
