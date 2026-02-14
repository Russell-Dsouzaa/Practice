"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function SPA(array1) {
    if (array1.length % 2 !== 0) {
        console.log(1);
        return false;
    }
    var count = {};
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var i = array1_1[_i];
        if (i in count) {
            count[i] += 1;
        }
        else {
            count[i] = 1; // There was no else block at first, I had this statement running at every iteration no matter what. That raised issues at runtime, resulting in incorrect outputs.
        }
    }
    for (var _a = 0, _b = Object.values(count); _a < _b.length; _a++) {
        var i = _b[_a];
        if (i > 2) {
            return false;
        }
    }
    return true;
}
function main() {
    var size = Number(prompt("Enter the size of the array ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    console.log(SPA(array1));
}
if (require.main === module) {
    main();
}
