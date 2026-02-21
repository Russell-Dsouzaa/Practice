import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function squareSum(arr : number[]) : number {
    let result : number = 0;

    for (let i of arr) {
        result += i * i;
    }

    return result;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), arr : number[] = [];

    for (let i = 0;i < size;i++) {
        arr.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(squareSum(arr));
}

if (require.main === module) {
    main();
}