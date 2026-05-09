import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function GS(num : number) : number {
    let result : number = 0;

    for (let i = 1;i <= num;i++) {    // In the problem's description, they've said that the inputs would always be +ve. But even if they aren't, we take care of it here, in this LOC, since we start counting/adding from 1, discarding all other values preceeding 1
        result += i;
    }

    return result;
}

function main() : void {
    let num : number = Number(prompt("Enter an Integer : "));

    console.log(`The Grasshopper summation of the entered integer (from '1' to num (both inclusive)) is : ${GS(num)}`); // we could've prompted the integer within the console.log function, but theat way we wouldn't have been able to typecheck it for 'number' datatype (in Typescript)
}

if (require.main === module) {
    main();
}