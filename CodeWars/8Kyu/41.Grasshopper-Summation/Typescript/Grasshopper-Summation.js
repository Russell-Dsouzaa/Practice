"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function GS(num) {
    var result = 0;
    for (var i = 1; i <= num; i++) { // In the problem's description, they've said that the inputs would always be +ve. But even if they aren't, we take care of it here, in this LOC, since we start counting/adding from 1, discarding all other values preceeding 1
        result += i;
    }
    return result;
}
function main() {
    var num = Number(prompt("Enter an Integer : "));
    console.log("The Grasshopper summation of the entered integer (from '1' to num (both inclusive)) is : ".concat(GS(num))); // we could've prompted the integer within the console.log function, but theat way we wouldn't have been able to typecheck it for 'number' datatype (in Typescript)
}
if (require.main === module) {
    main();
}
