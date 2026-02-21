"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function main() {
    var str = prompt("Enter a number(it will be stored as a string) : ");
    // console.log(Number(str));  method 1
    console.log(+str);
}
if (require.main === module) {
    main();
}
