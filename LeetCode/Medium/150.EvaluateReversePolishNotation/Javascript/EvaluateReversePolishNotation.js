const prompt = require('prompt-sync')();

function postFix(tokens) {
    var stack = [], operators = ['+','-','*','/'];  // we could use a set too, it doesn't really matter

    for (let i of tokens) {
        if (operators.includes(i)) {
            let operand2 = stack.pop(), operand1 = stack.pop();

            if (i === '+') {
                stack.push(operand1 + operand2);
            } else if (i === '-') {
                stack.push(operand1 - operand2);
            } else if (i === '*') {
                stack.push(operand1 * operand2);
            } else if (i === '/') {
                stack.push(Math.trunc(operand1 /operand2));
            }
        } else {
            stack.push(Number(i));  // if we don't put else statement and just keep this LOC outside of the if-else block, then, even operators will be pushed onto the stack
        }
    }

    return stack[0];
}

function main() {
    var size = Number(prompt("Enter the size of the 'tokens' array : ")), tokens = [];

    for (let i = 0;i < size;i++) {
        tokens.push(prompt(`Enter the ${i+1}th element of the array : `));
    }

    console.log(`Value of the expression when solved in reverse polish notation is : ${postFix(tokens)}`);
}

main();

/*
Learnings :-

    1. Math.floor() rounds moves towards -ve Infinity. (+3.7 becomes 3, -3.7 becomes -4, -3.1 becomes -4, +3.1 becomes 3). While, Math.trunc() on the other hand, moves towards 0. (+3.7 becomes 3 
    while -3.7 becomes -3)

    2. Make sure to typecast the numbers/integers from string to integers before using them in your operations.
*/