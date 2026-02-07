"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function boolToWord(bool1) {
    if (bool1) {
        return "Yes";
    }
    else {
        return "No";
    }
}
function main() {
    var result = prompt("Enter a boolean value (either 'true' or 'false') : ").toLowerCase();
    result = result === 'true';
    console.log(boolToWord(result));
}
if (require.main === module) {
    main();
}
