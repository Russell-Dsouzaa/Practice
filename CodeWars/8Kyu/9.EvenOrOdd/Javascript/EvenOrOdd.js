const prompt = require('prompt-sync')();

function evenOrOdd(num1) {
    if (num1 % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function main() {
    console.log(evenOrOdd(Number(prompt("Enter a number : "))));
}

if (require.main === module) {
    main();
}