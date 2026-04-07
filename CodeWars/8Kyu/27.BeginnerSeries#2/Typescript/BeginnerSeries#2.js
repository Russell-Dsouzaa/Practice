"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sig: true });
function clock(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}
function main() {
    var h = 0, m = 0, s = 0;
    h = Number(prompt("Enter the number of hours : "));
    m = Number(prompt("Enter the number of minutes : "));
    s = Number(prompt("Enter the number of seconds : "));
    console.log("".concat(h, " hours ").concat(m, " minutes ").concat(s, " seconds equals to ").concat(clock(h, m, s), " milliseconds"));
}
if (require.main === module) {
    main();
}
