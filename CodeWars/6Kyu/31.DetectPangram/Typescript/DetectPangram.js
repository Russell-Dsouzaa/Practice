"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function isPangram(str) {
    var set1 = new Set();
    // we could allow duplicates to be added here, because, 1. sets don't allow duplicates even if we force it and 2. Pangrams by definition (as given in the problem description) can have atleast 1 (that is, one or more than one) of every character in the alphabet
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        set1.add(i);
    }
    return set1.size === 27; // since the set also considers space as a unique character
}
function main() {
    var str = prompt("Enter a string : ");
    var result = isPangram(str.toLowerCase());
    if (result) {
        console.log("".concat(str, " is a Pangram :)"));
    }
    else {
        console.log("".concat(str, " isn't a Pangram :("));
    }
}
if (require.main === module) {
    main();
}
