const prompt = require('prompt-sync')();

function mirrorNumber(number1) {
    function reverse(num1) {
        var reversedNumber = 0;
        while (number1 > 0) {
            reversedNumber  *= 10;
            reversedNumber += number1 % 10;
            number1 = Math.floor(number1 /10);  // don't forget to put Math.floor wherever a division operator is used in JS, because without this, we initially got incorrect results
        }

        return reversedNumber;
    }

    return Math.abs(number1 - reverse(number1));
}

function main() {
    var num1 = Number(prompt("Enter a positive Integer : "));

    const mirrorNum = mirrorNumber(num1);
    console.log(mirrorNum);
}

main();