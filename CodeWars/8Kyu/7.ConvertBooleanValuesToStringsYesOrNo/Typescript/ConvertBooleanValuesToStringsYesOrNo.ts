import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function boolToWord(bool1 : boolean) : string {
    if (bool1) {
        return "Yes";
    } else {
        return "No";
    }
}

function main() : void {
    var result : boolean | string = prompt("Enter a boolean value (either 'true' or 'false') : ").toLowerCase();
    result = result === 'true';

    console.log(boolToWord(result));
}

if (require.main === module) {
    main();
}