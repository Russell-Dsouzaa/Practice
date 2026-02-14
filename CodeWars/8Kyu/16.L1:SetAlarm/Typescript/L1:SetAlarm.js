"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function setAlarm(employed, vacation) {
    if (employed && !vacation) {
        return true;
    }
    return false;
}
function main() {
    var employed = Boolean(prompt("Enter either a truthy or a falsy value for employed variable/field : ")), vacation = Boolean(prompt("Enter either a truthy or a falsy value for vacation variable/field : "));
    var result = setAlarm(employed, vacation);
    console.log(result);
}
if (require.main === module) {
    main();
}
