"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function count(jewels, stones) {
    var set1 = new Set(), count = 0;
    ;
    for (var _i = 0, jewels_1 = jewels; _i < jewels_1.length; _i++) {
        var i = jewels_1[_i];
        set1.add(i);
    }
    for (var _a = 0, stones_1 = stones; _a < stones_1.length; _a++) {
        var i = stones_1[_a];
        if (set1.has(i)) {
            count++;
        }
    }
    // alternative solution
    // for (let i of stones) {
    //     if (jewels.includes(i)) {
    //         count++;
    //     }
    // }
    return count;
}
function main() {
    var jewels = prompt("Enter the characters which represent jewels(in one single string) : "), stones = prompt("Enter the characters which represent stones(in one single string) : ");
    var result = count(jewels, stones);
    console.log("The number of jewels in stones are : ".concat(result));
}
main();
