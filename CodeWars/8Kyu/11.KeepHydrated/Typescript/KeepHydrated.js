"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function litres(time) {
    return Math.floor(time / 2); // time * 0/5 works as well;
}
function main() {
    var time = Number(prompt("Enter the time (in hours) : "));
    console.log("The amount of water that Nathan drinks in ".concat(time, " hours is ").concat(litres(time), " litres."));
}
if (require.main === module) {
    main();
}
