"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function billed(days) {
    if (days >= 7) {
        return (days * 40) - 50; // In CodeWars solution, we encapsulate the answer in math.floor() before returning. But we don't do that here, since we assume that the number of days would always be a whole number
    }
    else if (days >= 3) {
        return (days * 40) - 20;
    }
    else {
        return days * 40;
    }
}
function main() {
    console.log("Total amount charged : ".concat(billed(Number(prompt("Enter the number of days that you would want to rent a vehicle : ")))));
}
if (require.main === module) {
    main();
}
// Note :- If incase, we assume the possibility that the user might enter fractions/decimal numbers(non-numbers wala case, we haven't addressed yet), then in that case, wrap the expression in 
// Math.floor before returning. Ex:- return Math.floor(days * 40);
// We haven't addressed the cases where-in the user might enter -ve inputs or non-numeric inputs.
