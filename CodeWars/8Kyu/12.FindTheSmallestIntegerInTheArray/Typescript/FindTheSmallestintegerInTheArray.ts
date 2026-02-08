import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function findSmallestInteger(arr1 : number[]) : number {
    arr1.sort((a,b) => a - b);

    return arr1[0];
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), array1 : number[] = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The smallest element in [${array1}] is ${findSmallestInteger(array1)}`);
}

if (require.main === module) {
    main();
}