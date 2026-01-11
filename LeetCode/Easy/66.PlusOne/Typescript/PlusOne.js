"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function addOne(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    if (digits[0] === 0) { // Initially, we had this conditional statement(if (i === 0) {}) within the for-loop, but later realized that instead of checking it at every iteration, we could check it just once after the loop ends
        digits.unshift(1);
    }
    return digits; // Initially, we had this LOC within the if conditional statement right above this LOC. But the function addOne() would return undefined for exactly one case, where-in the input array is empty ([])
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), digits = [];
    for (var i = 0; i < size; i++) {
        digits.push(Number(prompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var result = addOne(digits);
    console.log("".concat(digits, " after being added by one would become : ").concat(result));
}
main();
