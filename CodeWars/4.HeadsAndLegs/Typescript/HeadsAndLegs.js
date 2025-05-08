"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var heads = Number((prompt("Enter the total number of heads : ")));
    ;
    var legs = Number(prompt("Enter the total number of legs : "));
    var result = headsAndLegs(heads, legs);
    console.log(result);
}
function headsAndLegs(heads, legs) {
    var Cows = Math.floor((legs / 2) - heads);
    var Chickens = Math.floor(heads - Cows);
    if (heads < 0 || legs < 0) {
        return "No solutions";
    }
    else if (2 * Chickens + 4 * Cows !== legs) {
        return "No solutions";
    }
    else {
        return [Chickens, Cows];
    }
}
main();
