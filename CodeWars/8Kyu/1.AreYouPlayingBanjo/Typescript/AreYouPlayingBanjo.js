"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
// const prompt = require('prompt-sync')();  
var prompt = PromptSync(); // both of these work the same
function main() {
    var s = prompt("Enter your name : ");
    var result = PlaysBanjo(s);
    console.log(result);
}
function PlaysBanjo(name) {
    if (name[0].toLowerCase() == 'r') {
        return name + " plays banjo";
    }
    else {
        return name + " does not play banjo";
    }
}
main();
