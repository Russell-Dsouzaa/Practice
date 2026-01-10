import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function isPalindrome(num : number) : boolean {
    if (num < 0) return false;

    var temp = num, oppositeNum = 0;

    while (temp > 0) {
        oppositeNum = oppositeNum * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }

    return num === oppositeNum;
}

function main() : void {
    var num : number = Number(prompt("Enter an Integer : "));

    var result : boolean = isPalindrome(num);
    console.log(result);
}

main();