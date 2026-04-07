"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function main() {
    var bool = Boolean(prompt("Enter a Boolean value(either True or False) : ")); // Some smartasses might try to enter 0 or 1 as boolean values(which are value tbh), but this program doesn't handle these inputs
    console.log(String(bool), typeof String(bool)); // alternative method :- bool + '';
}
if (require.main === module) {
    main();
}
