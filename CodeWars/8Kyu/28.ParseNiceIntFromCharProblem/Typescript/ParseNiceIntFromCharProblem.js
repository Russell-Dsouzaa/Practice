"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function main() {
    var s = prompt("Enter the girl's age : ");
    console.log(Number(s[0]));
}
if (require.main === module) {
    main();
}
