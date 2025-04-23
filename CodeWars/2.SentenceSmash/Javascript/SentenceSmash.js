const prompt = require('prompt-sync')();

function main() {
    var size = Number(prompt("Enter the size of the array : "));
    var words = []

    for (let i = 0;i < size;i++) {
        let a = prompt(`Enter the ${i+1}th element : `);
        words.push(a);
    }

    var result = Smash(words);
    console.log(result);
}

function Smash(words) {
    var result = "";

    for (let i of words) {
        result = result + " " + i;
    }

    return result;

    /*

    alternative method :-
        return words.join(" ");

    */
}

main();