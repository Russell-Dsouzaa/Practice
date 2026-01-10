"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function isPalindrome(num) {
    var str = num.toString();
    var start = 0, end = str.length - 1;
    while (start <= end) {
        if (str[start] === str[end]) {
            start++;
            end--;
        }
        else {
            return false;
        }
    }
    return true;
}
function main() {
    var num = Number(prompt("Enter an Integer : "));
    var result = isPalindrome(num);
    console.log(result);
}
main();
