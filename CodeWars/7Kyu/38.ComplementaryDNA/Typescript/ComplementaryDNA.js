"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function compDNA(str) {
    var result = '';
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        if (i.toUpperCase() === 'A') {
            result += 'T';
        }
        else if (i.toUpperCase() === 'T') {
            result += 'A';
        }
        else if (i.toUpperCase() === 'G') {
            result += 'C';
        }
        else if (i.toUpperCase() === 'C') { // I did this(put `else if` instead of `else`) here, assuming that the input string might contain other characters apart from the 4 which we want. This way, we clean/filter out unwanted characters.
            result += 'G';
        }
    }
    return result;
}
function main() {
    var str = prompt("Enter one side(half/strand) of input DNA : ");
    console.log("The other half/strand of the entered DNA is : ".concat(compDNA(str)));
}
if (require.main === module) {
    main();
}
