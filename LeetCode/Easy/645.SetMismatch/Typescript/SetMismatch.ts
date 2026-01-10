import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function findErrorNums(arr1 : number[]) : number[] {
    var missingElem : number = (arr1.length * (arr1.length + 1)) / 2, set1 : Set<number> = new Set(), dup : number = arr1[0];

    for (let i of arr1) {
        missingElem -= i;

        if (set1.has(i)) {
            dup = (i);
        } else {
            set1.add(i);
        }
    }

    return [dup,missingElem + dup];
}

function main() : void {
    var size : number = Number(prompt("Enter the size of the array : ")), arr1 : number[] = [];

    for (let i : number = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result : number[] = findErrorNums(arr1);

    console.log(`The duplicate element is : ${result[0]} while the number which was lost is : ${result[1]}`);
}

main();

/*
Learnings :-

    1. In Typescript, we set a set's type as 'var1 : Set<your_datatype>'
       In TypeScript, the type of a Set is specified using generic types within angle brackets (<>) after the Set constructor. This indicates the type of elements that the Set will contain.
*/