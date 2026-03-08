const prompt = require('prompt-sync')();

function EorO(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an Even number!`);
    } else {
        console.log(`${num} is an Odd number!`);
    }
}

function main() {
    let num = Number(prompt("Enter an integer : "));

    EorO(num);
}

if (require.main === module) {
    main();
}