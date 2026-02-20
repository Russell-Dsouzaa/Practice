import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function runningSum(arr : number[]) : number[] {
    // var result : number[] = [];  // we could modify the original array and then return it(to satisfy the requirement of return a number array) or we could create a separate array and modify it

    for (let i = 1;i < arr.length;i++) {
        arr[i] += arr[i - 1];
    }

    return arr;
}

function main() : void {
    var size : number = Number(prompt("Enter the size of the array : ")), arr : number[] = [];

    for (let i = 0;i < size;i++) {
        arr.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result : number[] = runningSum(arr);

    console.log(`Original array : ${arr} \n Running Sum of it : ${result}`);  // original and runningSum arrays both are being printed the same. To fix this, call the runingSum() function at LOC 23 inplace of 'result' (just as we did in the Javascript solution)
}

if (require.main === module) {
    main();
}

export default runningSum;

/*
Learnings :-

    1. The reason why, at LOC 21, original array is NOT the same as runningSum array, is because the function 'runningSum()' is being called after 'arr' is already evaluated/prinited onto the console.
*/