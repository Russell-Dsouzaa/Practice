import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function mirrorDistance(number1 : number) : number {
    function reverse(n1 : number) {
        var reversedNumber : number = 0;

        while (n1 > 0) {
            reversedNumber *= 10;
            reversedNumber += n1 % 10;
            n1 = Math.floor(n1 / 10);
        }

        return reversedNumber;
    }

    return Math.abs(number1 - reverse(number1));
}

function main() {
    var num1 : number = Number(prompt("Enter a positive integer : "));

    var mirrorNum : number = mirrorDistance(num1);
    console.log(mirrorNum);
}

main();