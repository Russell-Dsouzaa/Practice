"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
function RomanToInteger(r) {
    if (r.length == 0) {
        return 0;
    }
    var result = 0;
    var RToI = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (var i = 0; i < r.length - 1; i++) {
        if (RToI[r[i]] < RToI[r[i + 1]]) {
            result = result - RToI[r[i]];
        }
        else {
            result = result + RToI[r[i]];
        }
    }
    result = result + RToI[r[r.length - 1]];
    return result;
}
function main() {
    var RomanNumeral = prompt("Enter a combination of the following characters I,V,X,L,C,D,M : ");
    var result = RomanToInteger(RomanNumeral.toUpperCase());
    console.log("The decimal equivalent of ".concat(RomanNumeral, " is ").concat(result));
}
main();
