import * as PromptSync from 'prompt-sync'
const prompt = require('prompt-sync')();

function RomanToInteger(r : string) : Number {
    if (r.length == 0) {
        return 0;
    }

    var result = 0;

    const RToI = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    for (let i = 0;i < r.length - 1;i++) {
        if (RToI[r[i]] < RToI[r[i + 1]]) {
            result = result - RToI[r[i]];
        } else {
            result = result + RToI[r[i]];
        }
    }

    result = result + RToI[r[r.length - 1]];
    return result;
}

function main() : void {  // I'm not sure what return datatype to put here, since main() is not really returing a value (or is it ? is it returing exit value's like 0 or 1, as C programs do ? idk tbh).
    var RomanNumeral  : string = prompt("Enter a combination of the following characters I,V,X,L,C,D,M : ");

    var result  : Number = RomanToInteger(RomanNumeral.toUpperCase());   // if we use 'number' instead of 'Number' to specify variable datatype, it raises an error. This is because Number is a wrapper class while number is primitive data-type.

    console.log(`The decimal equivalent of ${RomanNumeral} is ${result}`);
}

main();