const prompt = require('prompt-sync')();

function solution (num1) {
    if (num1 < 0) {
        return 0;
    }

    let result = 0;

    for (let i = 1;i < num1;i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }

    return result;
}

function main() {
    let num1 = Number(prompt("Enter an Integer : "));

    var result = solution(num1);
    console.log(`The sum of all integers between 0 and ${num1}(non-inclusive) which are divisible by 3 and/or 5 is : ${result}`);
}

main();