import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function countDup(array1 : string[]) : number {
    let map : {[key : string] : number}= {}, result : number = 0;

    for (let i of array1) {
        if (i.toLowerCase() in map) {
            map[i.toLowerCase()] += 1;
        } else {
            map[i.toLowerCase()] = 1;
        }
    }

    for (let i of Object.keys(map)) {
        if (map[i] > 1) {
            result++;
        }
    }

    return result;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), arr1 : string[] = [];

    for (let i = 0;i < size;i++) {
        arr1.push(prompt(`Enter the ${i + 1}th element of the array : `));
    }

    let result : number = countDup(arr1);
    console.log(`The number of elements having more than 1 occurance is : ${result}`);
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. Initially, I had wrapped up prompt() within Number() class (there was no need to do that do, I did it out of muscle memory). This caused an error in `countDup` function, wherever I had used 
    .toLowerCase() string method. This happened because at LOC 27, I wAS converting each input element to a Number and then later on, in `countDup` function, I was running .toLowerCase() method on them.
*/