const prompt = require('prompt-sync')();

function compDNA(str) {
    let result = '';

    for (let i of str) {
        if (i.toUpperCase() === 'A') {
            result += 'T';
        } else if (i.toUpperCase() === 'T') {
            result += 'A';
        } else if (i.toUpperCase() === 'G') {
            result += 'C';
        } else if (i.toUpperCase() === 'C') {  // I did this(put `else if` instead of `else`) here, assuming that the input string might contain other characters apart from the 4 which we want. This way, we clean/filter out unwanted characters.
            result += 'G';
        }
    }

    return result;
}

function main() {
    let str = prompt("Enter one side(half/strand) of input DNA : ");

    console.log(`The other half/strand of the entered DNA is : ${compDNA(str)}`);
}

if (require.main === module) {
    main();
}