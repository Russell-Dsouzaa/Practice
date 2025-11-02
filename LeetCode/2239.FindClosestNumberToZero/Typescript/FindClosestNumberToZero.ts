import * as PromptSync from "prompt-sync"

const prompt = PromptSync();

function main() {
    let array1 : number[] = [], size : number = prompt("Enter the size of the array : ");

    for (let i : number = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i}th element of the array : `)));
    }

    let result : number | null = findTheClosestNumberToZero(array1);

    console.log(result);    // I know, we could've skipped the previous line (LOC 12) and called the function inside of console.log directly. But this way, we learn how to assign two types to a variable.
}

function findTheClosestNumberToZero(array1 : number[]) {
    let result : number = Number.MAX_VALUE;

    for (let i of array1) {
        if (Math.abs(i) < Math.abs(result)) {
            result = i;
        }
    }

    if (result < 0 && array1.includes(Math.abs(result))) {
        return Math.abs(result);
    }

    return result;
}

main();