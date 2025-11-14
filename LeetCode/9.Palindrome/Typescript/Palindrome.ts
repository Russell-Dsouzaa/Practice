import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function isPalindrome(num : number) : boolean {
    var str : string = num.toString();
    var start : number = 0, end : number = str.length - 1;

    while (start <= end) {
        if (str[start] === str[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }

    return true;
}

function main() : void {
    var num : number = Number(prompt("Enter an Integer : "));

    var result : boolean = isPalindrome(num);
    console.log(result);
}

main();