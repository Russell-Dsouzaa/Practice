import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function main() : void {
    let bool : boolean = Boolean(prompt("Enter a Boolean value(either True or False) : "));  // Some smartasses might try to enter 0 or 1 as boolean values(which are value tbh), but this program doesn't handle these inputs

    console.log(String(bool), typeof String(bool));  // alternative method :- bool + '';
}

if (require.main === module) {
    main();
}