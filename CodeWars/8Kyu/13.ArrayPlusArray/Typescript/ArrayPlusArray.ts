import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function sum(arr1 : number[],arr2 : number[]) : number {
    let i : number = 0, j : number = 0, result : number = 0;

    while (i < arr1.length && j < arr2.length) {
        result += arr1[i++] + arr2[j++];
    }

    if (i < arr1.length) {
        while (i < arr1.length) {
            result += arr1[i++];
        }
    }

    if (j < arr2.length) {
        while (j < arr2.length) {
            result += arr2[j++];
        }
    }

    return result;
}

function main() : void {
    let size1 : number = Number(prompt("Enter the size of the first array : ")), size2  : number = Number(prompt("Enter the size of the second array : ")), array1 : number[] = [], array2 : number[] = [];

    for (let i = 0;i < size1;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the first array : `)));
    }

    for (let i = 0;i < size2;i++) {
        array2.push(Number(prompt(`Enter the ${i + 1}th element of the second array : `)));
    }

    console.log(`The sum of all the elements of [${array1}] and [${array2}] is ${sum(array1,array2)}`);
}

if (require.main === module) {
    main();
}