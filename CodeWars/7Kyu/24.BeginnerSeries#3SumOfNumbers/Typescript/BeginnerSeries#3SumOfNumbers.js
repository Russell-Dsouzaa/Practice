"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function son(num1, num2) {
    var result = 0, min = Math.min(num1, num2), max = Math.max(num1, num2);
    for (var i = min; i <= max; i++) {
        result += i;
    }
    return result;
}
function main() {
    var num1 = Number(prompt("Enter the first integer : ")), num2 = Number(prompt("Enter the second integer : "));
    console.log("The sum of ".concat(num1, " and ").concat(num2, " (inclusive) is : ").concat(son(num1, num2)));
}
if (require.main === module) {
    main();
}
