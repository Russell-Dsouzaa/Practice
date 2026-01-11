const prompt = require('prompt-sync')();

function addOne(digits) {
    for (let i = digits.length - 1;i >= 0;i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    if (digits[0] === 0) {  // Initially, we had this conditional statement(if (i === 0) {}) within the for-loop, but later realized that instead of checking it at every iteration, we could check it just once after the loop ends
        digits.unshift(1);
    }

    return digits;  // Initially, we had this LOC within the if conditional statement right above this LOC. But the function addOne() would return undefined for exactly one case, where-in the input array is empty ([])
}

function main() {
    var size = Number(prompt("Enter the size of the array : ")), digits = [];

    for (let i = 0;i < size;i++) {
        digits.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`${digits} after being added by one would become : ${addOne(digits)}`);
}

main();

/*  2nd attempt
    var num = BigInt(0), result = [];

    for (let i of digits) {
        num *= BigInt(10);
        num = num + BigInt(i);
    }

    num += BigInt(1);

    while (num > 0) {
        result.unshift(num % BigInt(10));
        num = BigInt(Math.floor(Number((num / BigInt(10)))));  // without Math.floor(), it resulted in an infinite loop for 'num = 10'
    }

    return result;
    */

/*
Note :-

    1. This solution works for inputs greater than 16 digits
*/