"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function isPalindrome(num) {
    if (num < 0)
        return false;
    var temp = num, oppositeNum = 0;
    while (temp > 0) {
        oppositeNum = oppositeNum * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return num === oppositeNum;
}
function main() {
    var num = Number(prompt("Enter an Integer : "));
    var result = isPalindrome(num);
    console.log(result);
}
main();
