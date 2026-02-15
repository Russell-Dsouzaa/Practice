import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function count(arr1 : boolean[]) : number {
    let falseCount : number = 0;

    for (let i of arr1) {
        if (i !== true) {
            falseCount++;
        }
    }

    return arr1.length - falseCount;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), arr1 : string[]  = [];

    for (let i = 0;i < size;i++) {
        arr1.push((prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    let cleanedArr : boolean[] = arr1.map(elem => elem.toLowerCase() === 'true');

    console.log(count(cleanedArr));
}

if (require.main === module) {
    main();
}

/*
Learnings :- 

    1. At LOC 20, using Boolean(prompt()) considers 'false' as true, it considers non-empty strings as true and empty strings as false. So it doesn't work as we intended.

*/