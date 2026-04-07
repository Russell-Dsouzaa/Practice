import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function main() : void {
    let s : string = prompt("Enter the girl's age : ");

    console.log(Number(s[0]));
}

if (require.main === module) {
    main();
}