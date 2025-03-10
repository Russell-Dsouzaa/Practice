const prompt = require('prompt-sync')();

function RomanToInteger(r) {

    if (r.length == 0) {
        return 0;
    }

    var result = 0;

    const RtoI = {      // here, the keys don't necessarily have to be in quotation marks. In case there is a space or a special character in the string, then we need to put quotation marks compulsory, so that when we access the object's elements, no error occurs. eg :- RtoI["str with space"] works fine while RtoI[str with space] raises an error.
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500, 
        M : 1000
    };

    for (let i = 0;i < r.length - 1;i++) {
        if (RtoI[r[i]] < RtoI[r[i + 1]]) {
            result = result - RtoI[r[i]];
        } else {
            result = result + RtoI[r[i]];
        }
    }

    result = result + RtoI[r[r.length - 1]]; // here, r.length - 1 refers to the last character of the string, not r.length
    return result;
}

function main() {
    do {
        var RomanNumeral = prompt("Enter a Roman Numeral (a combination of I,V,X,L,C,D and M): ");    // here, if I used const to define the variable, the loop would not end even if the use complied and entered a stirng input. When I replaced const wiht var, it owrked as intended. :)
    } while (typeof(RomanNumeral) !== 'string');

    var result = RomanToInteger(RomanNumeral.toUpperCase());

    console.log(`The Decimal equivalent of ${RomanNumeral} is ${result}`);
}

main();


/*

✅ 1. Quotation Marks (Optional for keys in objects)
Valid identifiers (like strings without spaces or special characters) don't need quotes.
Strings with spaces, special characters, or starting with a number must be in quotes.
javascript
Copy
Edit
// No quotes needed for valid identifiers
const A = { I: 1, V: 5 };

// Quotes required for keys with spaces or special characters
const B = { "I": 1, "V": 5 };      // Also valid
const C = { "my key": 10 };        // Quotes are required
const D = { "123key": 20 };        // Starts with a number, needs quotes
const E = { "@special": 30 };      // Special character, needs quotes

*/