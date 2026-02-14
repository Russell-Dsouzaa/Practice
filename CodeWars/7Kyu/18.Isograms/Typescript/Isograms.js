"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function isAnagram(str) {
    var set = new Set();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        if (set.has(i.toLowerCase())) {
            return false;
        }
        else {
            set.add(i.toLowerCase());
        }
    }
    return true;
}
function main() {
    var str = prompt("Enter a string : ");
    console.log(isAnagram(str));
}
if (require.main === module) {
    main();
}
