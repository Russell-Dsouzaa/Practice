import * as PromptSync from 'prompt-sync'
const prompt : any = PromptSync();

function summaryRanges(array1 : number[]) {
    var start : number = array1[0], end : number = array1[0], result : string[] = [];

    for (let i : number = 0;i < array1.length - 1;i++) {
        if (array1[i + 1] === array1[i] + 1) {
            end = array1[i + 1];                               // at all places, when we update the value in 'start' or 'end' variables, we assign them 'array1[i + 1' instead of 'array1[i] + 1'. This is because, the next element after the range might be more than 1 step ahead of the current value, in which case, array1[i] + N should be used (in other words, we cannot assume N to be 1)
        } else {
            if (start === end) {
                result.push(`${start}`);
            } else {
                result.push(`${start} -> ${end}`);
            }

            start = array1[i + 1];
            end = array1[i + 1];
        }
    }

    if (start === end) {
        result.push(`${start}`);
    } else {
        result.push(`${start} -> ${end}`);
    }

    return result;
}

function main () {
    var size : number = Number(prompt("Enter the size of the array : ")), array1 : number[] = [];

    for (let i : number = 0;i < size;i++) {
        array1[i] = Number(prompt(`Enter the ${i + 1}th element of the array : `));
    }

    var result : string[] = summaryRanges(array1);

    console.log(result);
}

main();

/*
Learnings :-
    1. at all places, when we update the value in 'start' or 'end' variables, we assign them 'array1[i + 1' instead of 'array1[i] + 1'. 
    This is because, the next element after the range might be more than 1 step ahead of the current value, in which case, array1[i] + N should 
    be used (in other words, we cannot assume N to be 1).
*/