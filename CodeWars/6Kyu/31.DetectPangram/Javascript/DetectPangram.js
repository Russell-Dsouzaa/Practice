const prompt = require('prompt-sync')();

function isPangram(str) {
    let set1 = new Set();

    // we could allow duplicates to be added here, because, 1. sets don't allow duplicates even if we force it and 2. Pangrams by definition (as given in the problem description) can have atleast 1 (that is, one or more than one) of every character in the alphabet
    for (let i of str) {
        set1.add(i);
    }

    return set1.size === 27;  // since the set also considers space as a unique character
}

function main() {
    let str = prompt("Enter a string : ");

    let result = isPangram(str.toLowerCase());

    if (result) {
        console.log(`${str} is a Pangram :)`);
    } else {
        console.log(`${str} isn't a Pangram :(`);
    }
}

if (require.main === module) {
    main();
}