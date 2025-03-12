"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var size = Number(prompt("Enter the size of the array : "));
    var words = [];
    for (var i = 0; i < size; i++) {
        var a = prompt("Enter the ".concat(i + 1, "th element of the array : "));
        words.push(a);
    }
    var result = Smash(words);
    console.log(result);
}
function Smash(words) {
    var result = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var i = words_1[_i];
        result = result + " " + i;
    }
    return result;
}
main();
