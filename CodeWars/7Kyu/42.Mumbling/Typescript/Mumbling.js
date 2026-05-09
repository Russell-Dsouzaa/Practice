"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function mumb(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = 1; j <= i + 1; j++) {
            if (j === 1) {
                result += str[i].toUpperCase();
            }
            else {
                result += str[i].toLowerCase(); // we transform the characters to lower case, to handle cases, where the input string itslef contains Uppercase characters (because of those character, the output would be ...-EEEEEE-...)
            }
        }
        result += '-';
    }
    return result.slice(0, -1); // .slice(0,1) and .substring(0, str.length - 1) to remove the very last character from a string while .slice(1) and .substring(1) to remove the very first character from a string.
}
function main() {
    var str = prompt("Enter an input in the form of a string : ");
    console.log("The resuting string is as follows : ".concat(mumb(str)));
}
if (require.main === module) {
    main();
}
