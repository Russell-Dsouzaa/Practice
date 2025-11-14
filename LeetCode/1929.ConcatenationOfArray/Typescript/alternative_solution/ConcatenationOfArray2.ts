import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function Conc(arr1 : number[]) : number[] {
    return [...arr1,...arr1];
}

function main () : void {
    var arr1 : number[] = [], size : number = Number(prompt("Enter the size of the array : "));

    for (let i : number = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(Conc(arr1));
}

main();