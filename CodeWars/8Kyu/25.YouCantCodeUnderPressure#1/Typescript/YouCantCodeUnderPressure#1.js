"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function double(num) {
    return num * 2;
}
function main() {
    var num = Number(prompt("Enter an integer : "));
    console.log("The double of the input : ".concat(double(num)));
}
if (require.main === module) {
    main();
}
