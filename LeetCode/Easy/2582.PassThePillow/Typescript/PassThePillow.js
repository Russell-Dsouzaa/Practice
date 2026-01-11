"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function passThePillow(n, time) {
    var i = 1, direction = -1;
    while (time > 0) {
        if (i === 1) {
            direction = 1;
        }
        else if (i === n) {
            direction = -1;
        }
        i += direction;
        time--;
    }
    return i;
}
function main() {
    var n = Number(prompt("Enter the number of people who are standing next to each other : ")), time = Number(prompt("Enter the amount of time(in seconds) : "));
    var index = passThePillow(n, time);
    console.log("The index of the person who would hold the pillow when the time hits 0 is : ".concat(index));
}
main();
