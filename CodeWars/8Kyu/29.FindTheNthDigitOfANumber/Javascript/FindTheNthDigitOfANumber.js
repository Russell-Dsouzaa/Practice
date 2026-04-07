const prompt = require('prompt-sync')();

function Nth(num, n) {
    if (n < 1) {
        return -1;
    }

    if (num < 0) {
        num = Math.abs(num);
    }

    let result = 0;

    for (let i = 0;i < n;i++) {
        result = num % 10;
        num /= 10;
    }

    return Math.floor(result);
}

function main() {
    let num = Number(prompt("Enter an Integer : ")), n = Number(prompt("Enter the value of 'n' : "));

    console.log(`The nth digit from the right is : ${Nth(num,n)}`);
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. At LOC 9, we had to put the condition within a separate if statement instead of putting it in an if-else statement in the if statement right above it. This is because, in the case where the first condition is true, the 'else if' conditional won't execute and for inputs where-in num < 0, the output would be incorrect
*/