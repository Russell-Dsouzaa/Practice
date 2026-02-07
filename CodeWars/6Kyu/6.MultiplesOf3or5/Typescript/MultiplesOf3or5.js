"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function solution(num1) {
    if (num1 < 0) {
        return 0;
    }
    var result = 0;
    for (var i = 1; i < num1; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    return result;
}
function main() {
    var num1 = Number(prompt("Enter an Integer : "));
    var result = solution(num1);
    console.log("The sum of all integers between 0 and ".concat(num1, "(non-inclusive) which are divisible by 3 and/or 5 is : ").concat(result));
}
if (require.main === module) {
    main();
}
