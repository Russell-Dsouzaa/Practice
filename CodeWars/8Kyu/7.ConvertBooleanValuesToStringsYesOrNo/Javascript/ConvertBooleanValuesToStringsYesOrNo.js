const prompt = require('prompt-sync')();

function boolToWord(bool1) {
    if (bool1) {
        return "Yes";
    } else {
        return "No";
    }
}

function main() {
    var result = prompt("Enter a boolean value (either 'true' or 'false') : ").toLowerCase();
    result = result === 'true';

    console.log(boolToWord(result));
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. At LOC 12, initially, we encapsulated prompt() within Boolean() thinking that it would convert 'True' string to True boolean value and 'False' string to 
    False boolean value. But that doesn't work as expected, since that would consider non-empty input as true and empty enput as false.

    2. In Javascript, boolean values are lowercased : true, false (not True, False).
*/

// Note :- Currently, entering any other string(apart from 'True/true' and 'False/false') would be considered as False, and the output would be 'No'.