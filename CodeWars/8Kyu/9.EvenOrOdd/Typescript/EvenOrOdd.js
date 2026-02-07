"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function evenOrOdd(num1) {
    if (num1 % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
function main() {
    var result = evenOrOdd(Number(prompt("Enter a number : ")));
    console.log(result);
}
if (require.main === module) {
    main();
}
