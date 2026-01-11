"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function postFix(tokens) {
    var stack = [], operators = ['+', '-', '*', '/']; // we could use a set too, it doesn't really matter
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var i = tokens_1[_i];
        if (operators.includes(i)) {
            var operand2 = stack.pop(), operand1 = stack.pop(); // typescript compiler was highlighting this red, saying that 'undefined | number' cannot be assigned to 'number'. This is because, stack.pop() would return 'undefined' when the stack or token array is empty
            if (i === '+') {
                stack.push(operand1 + operand2);
            }
            else if (i === '-') {
                stack.push(operand1 - operand2);
            }
            else if (i === '*') {
                stack.push(operand1 * operand2);
            }
            else if (i === '/') {
                stack.push(Math.trunc(operand1 / operand2));
            }
        }
        else {
            stack.push(Number(i)); // if we don't put else statement and just keep this LOC outside of the if-else block, then, even operators will be pushed onto the stack
        }
    }
    return stack[0];
}
function main() {
    var size = Number(prompt("Enter the size of the 'tokens' array : ")), tokens = [];
    for (var i = 0; i < size; i++) {
        tokens.push(prompt("Enter the ".concat(i + 1, "th element of the array : ")));
    }
    var result = postFix(tokens);
    console.log("Value of the expression when solved in reverse polish notation is : ".concat(result));
}
main();
/*
Learnings :-

    1. Math.floor() rounds moves towards -ve Infinity. (+3.7 becomes 3, -3.7 becomes -4, -3.1 becomes -4, +3.1 becomes 3). While, Math.trunc() on the other hand, moves towards 0. (+3.7 becomes 3
    while -3.7 becomes -3)

    2. Make sure to typecast the numbers/integers from string to integers before using them in your operations.
*/ 
