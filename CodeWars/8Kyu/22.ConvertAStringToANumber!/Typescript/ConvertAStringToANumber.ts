import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function main() : void {
    let str : string = prompt("Enter a number(it will be stored as a string) : ");

    // console.log(Number(str));  method 1
    console.log(+ str);
}

if (require.main === module) {
    main();
}