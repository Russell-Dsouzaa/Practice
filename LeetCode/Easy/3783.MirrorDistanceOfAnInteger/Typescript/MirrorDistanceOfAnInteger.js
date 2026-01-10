"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function mirrorDistance(number1) {
    function reverse(n1) {
        var reversedNumber = 0;
        while (n1 > 0) {
            reversedNumber *= 10;
            reversedNumber += n1 % 10;
            n1 = Math.floor(n1 / 10);
        }
        return reversedNumber;
    }
    return Math.abs(number1 - reverse(number1));
}
function main() {
    var num1 = Number(prompt("Enter a positive integer : "));
    var mirrorNum = mirrorDistance(num1);
    console.log(mirrorNum);
}
main();
