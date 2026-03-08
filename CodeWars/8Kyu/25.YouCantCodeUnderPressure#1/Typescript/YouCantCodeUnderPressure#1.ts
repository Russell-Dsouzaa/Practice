import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function double (num : number) : number {
    return num * 2;
}

function main () : void {
    let num : number = Number(prompt("Enter an integer : "));

    console.log(`The double of the input : ${double(num)}`);
}

if (require.main === module) {
    main();
}