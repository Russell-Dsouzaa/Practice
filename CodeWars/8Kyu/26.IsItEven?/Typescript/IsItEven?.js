"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function EorO(num) {
    if (num % 2 === 0) {
        console.log("".concat(num, " is an Even number!"));
    }
    else {
        console.log("".concat(num, " is an Odd number!"));
    }
}
function main() {
    var num = Number(prompt("Enter an integer : "));
    EorO(num);
}
if (require.main === module) {
    main();
}
