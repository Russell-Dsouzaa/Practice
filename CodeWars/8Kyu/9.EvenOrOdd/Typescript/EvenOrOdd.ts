import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function evenOrOdd(num1) : string {
    if (num1 % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function main() : void {
    let result : string = evenOrOdd(Number(prompt("Enter a number : ")));
    console.log(result);
}

if (require.main === module) {
    main();
}