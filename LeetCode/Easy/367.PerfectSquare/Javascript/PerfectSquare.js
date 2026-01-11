const prompt = require('prompt-sync')();

function perfectSquare(num) {
    for (let i = 1;i * i <= num;i++) {  // make sure to put '<=' instead of just '<', otherwise the loop might not execute for the condition when i * i == num
        if (i * i === num) {
            return true;  // if incase, we would want also want to know the square root of 'num', we could just return 'i'
        }
    }

    return false;
}

function main() {
    var num = Number(prompt("Enter an integer : "));

    var result = perfectSquare(num);

    if (result) {
        console.log(`${num} is a perfect square :)`);
    } else {
        console.log(`${num} is not a perfect square :(`);
    }
}

main();

/*
Learnings :-

    1. At LOC 6, if incase, we would want also want to know the square root of 'num', we could just return 'i'
    2. At LOC 4, make sure to put '<=' instead of just '<', otherwise the loop might not execute for the condition when i * i == num
*/