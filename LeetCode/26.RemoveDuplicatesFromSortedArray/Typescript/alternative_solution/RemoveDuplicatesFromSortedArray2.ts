import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function rmDuplicates(arr1 : number[]) : number | number[] {
    if (arr1.length < 2) return arr1;

    var k = 1;  // since, the very first element in a sorted array would always be unique

    for (let i : number = 1;i < arr1.length;i++) {
        if (arr1[i] !== arr1[i - 1]) {
            arr1[k++] = arr1[i];
        }
    }

    return k;
}

function main() : void {
    var size : number = Number(prompt("Enter the size of the array : ")), arr1 : number[] = [];

    for (let i : number = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result : number | number[] = rmDuplicates(arr1);
    console.log(result);
}

main();