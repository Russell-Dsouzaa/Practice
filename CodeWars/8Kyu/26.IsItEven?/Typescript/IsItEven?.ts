import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function EorO(num : number) : void {
    if (num % 2 === 0) {
        console.log(`${num} is an Even number!`);
    } else {
        console.log(`${num} is an Odd number!`);
    }
}

function main() : void {
    let num : number = Number(prompt("Enter an integer : "));

    EorO(num);
}

if (require.main === module) {
    main();
}