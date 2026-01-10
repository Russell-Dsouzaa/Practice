import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function rmElements(arr1 : number[],target : number) : number {
    var k : number = 0;

    for (let i of arr1) {
        if (i !== target) {
            arr1[k++] = i;
        }
    }

    return k;
}

function main() : void {
    var size : number = Number(prompt("Enter the size of the array : ")), arr1 : number[] = [], target : number = Number(prompt("Enter the target Integer : "));

    for (let i : number = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result : number = rmElements(arr1,target);

    console.log(`Original Array : ${arr1}, look at the first ${result} elements.`);
}

main();

/*
Learnings :-
    1. Initially, we didn't include LOC 22(we called rmElements() function directly in the console.log() function). That resulted in the user-inputed array being printed at LOC 24 (for #{arr1} part of console.log()). This is because, the ${arr1} variable is executed 
    before the rmElements() function was called. Hence, we print the array before it gets mutated. So, to solve this issue, we call the funciton right before the console.log()
*/