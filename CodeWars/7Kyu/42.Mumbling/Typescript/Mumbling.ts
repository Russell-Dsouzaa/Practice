import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function mumb(str : string) : string {
    let result : string = '';

    for (let i = 0;i < str.length;i++) {
        for (let j = 1;j <= i + 1;j++) {
            if (j === 1) {
                result += str[i].toUpperCase();
            } else {
                result += str[i].toLowerCase();  // we transform the characters to lower case, to handle cases, where the input string itslef contains Uppercase characters (because of those character, the output would be ...-EEEEEE-...)
            }
        }

        result += '-';
    }

    return result.slice(0,-1);  // .slice(0,1) and .substring(0, str.length - 1) to remove the very last character from a string while .slice(1) and .substring(1) to remove the very first character from a string.
}

function main() : void {
    let str = prompt("Enter an input in the form of a string : ");

    console.log(`The resuting string is as follows : ${mumb(str)}`);
}

if (require.main === module) {
    main();
}