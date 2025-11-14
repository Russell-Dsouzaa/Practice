import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function Conc(arr1 : number[]) : number[] {
    var ptr1 = 0, ptr2 = arr1.length, result = [];

    for (let i of arr1) {
        result[ptr1++] = i;
        result[ptr2++] = i;
    }

    return result;
}

function main () {
    var arr1 : number[] = [], size : number = Number(prompt("Enter the size of the array : "));

    for (let i : number = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result : number[] = Conc(arr1);
    console.log(result);
}

main();