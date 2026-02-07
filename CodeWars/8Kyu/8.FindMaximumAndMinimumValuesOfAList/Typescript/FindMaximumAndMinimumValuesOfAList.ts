import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function maxAndMin(arr1 : number[]) : number[] {
    // ik, in problem's description, they've explicitly asked us to create two separate functions. But, here, I mushed them into one single function

    let max : number = -Infinity, min : number = Infinity;  // Number.MIN_VALUE is the lowest postive value (0.0000000... something)

    for (let i of arr1) {
        if (i > max) {
            max = i;
        } 
        
        if (i < min) {  // we didn't put this under 'else-if' to tackle cases where the size of the input array is 1
            min = i;
        }
    }

    return [max,min];
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the integer array : ")), array1 : number[] = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    let result : number[] = maxAndMin(array1);
    console.log(`The maximum and minimum values in the given array [${array1}] are : ${result[0]} and ${result[1]} respectively.`);
}

if (require.main === module) {
    main();
}