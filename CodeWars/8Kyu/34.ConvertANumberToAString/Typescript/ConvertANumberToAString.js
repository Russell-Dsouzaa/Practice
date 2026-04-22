"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function convertNumber(var1) {
    // return String(var1);
    return var1 + '';
}
function main() {
    var result = convertNumber(Number(prompt("Enter an Integer : ")));
    console.log("Datatype of ".concat(result, " is ").concat(typeof (result)));
}
if (require.main === module) {
    main();
}
