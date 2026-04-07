"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function Nth(num, n) {
    if (n < 1) {
        return -1;
    }
    if (num < 0) {
        num = Math.abs(num);
    }
    var result = 0;
    for (var i = 0; i < n; i++) {
        result = num % 10;
        num /= 10;
    }
    return Math.floor(result);
}
function main() {
    var num = Number(prompt("Enter an Integer : ")), n = Number(prompt("Enter the value of 'n' : "));
    console.log("The nth digit from the right is : ".concat(Nth(num, n)));
}
if (require.main === module) {
    main();
}
