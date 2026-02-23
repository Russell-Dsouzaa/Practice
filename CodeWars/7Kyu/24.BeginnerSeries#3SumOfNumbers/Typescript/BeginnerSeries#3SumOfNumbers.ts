import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function son(num1 : number, num2 : number) : number {
    let result = 0, min = Math.min(num1,num2), max = Math.max(num1,num2);

    for (let i = min;i <= max;i++) {
        result += i;
    }

    return result;
}

function main() : void {
    let num1 : number = Number(prompt("Enter the first integer : ")), num2 : number = Number(prompt("Enter the second integer : "));

    console.log(`The sum of ${num1} and ${num2} (inclusive) is : ${son(num1,num2)}`);
}

if (require.main === module) {
    main();
}