const prompt = require('prompt-sync')();

function son(num1,num2) {
    let result = 0, min = Math.min(num1,num2), max = Math.max(num1,num2);

    for (let i = min;i <= max;i++) {
        result += i;
    }

    return result;
}

function main() {
    let num1 = Number(prompt("Enter the first integer : ")), num2 = Number(prompt("Enter the second integer : "));

    console.log(`The sum of ${num1} and ${num2} (inclusive) is : ${son(num1,num2)}`);
}

if (require.main === module) {
    main();
}