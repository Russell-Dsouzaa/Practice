"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function stackOperations(target, n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        result.push("Push");
        if (!target.includes(i)) {
            result.push("Pop");
        }
        if (check(i)) { // checks whether the currect number/integer/value of 'n' is the last element in 'target' array or not
            break;
        }
    }
    function check(num) {
        return num === target[target.length - 1];
    }
    return result;
}
function main() {
    var target = [], n = Number(prompt("Enter the value of 'n' : ")), size = Number(prompt("Enter the size of the target array : "));
    for (var i = 0; i < size; i++) {
        target.push(Number(prompt("Enter the ".concat(i + 1, "th element of the target array : "))));
    }
    var result = stackOperations(target, n);
    console.log(result); // yeak, ik, I could've called staackoperations() function directly within console.log()
}
main();
