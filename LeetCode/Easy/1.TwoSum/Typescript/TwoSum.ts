// method 1 to try to make user-input through 'prompt()' work in Typescript
// const prompt = require('prompt-sync')();

// method 2
// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// sadly, I couldn't find a way to replicate the solution which I used in the JS version of this Leetcode problem.

// Nevermind, this works. I had to run `npm run prompt-sync` in the terminal.   (is it npm install prompt-sync /or/ npm run prompt-sync ?)

import * as PromptSync from 'prompt-sync'

const prompt = PromptSync();

function TwoSum(arr1 : number[],target : number) : number | number[] {
    for (let i = 0;i < arr1.length - 1;i++) {
        for (let j = 0;j < arr1.length;j++) {
            if (arr1[j] == target - arr1[i]) {
                return [i + 1,j + 1];
            }
        }
    }

    return (-1);
}

function main() {
    // var array1 : number[] = [1,2,3,4,5];
    // var target : number = 9;

    var size : number = Number(prompt("Enter the size of the array : "));
    var array1 : number[] = [];

    for (let i = 0;i < size;i++) {
        let a : number = Number(prompt(`Enter the ${i + 1}th element : `));
        array1.push(a);
    }

    var target : number = Number(prompt("Enter the target element : "));

    var result : number | number[]= TwoSum(array1,target);

    if (result == (-1)) {
        console.log("No two array elements add up to the target");
    } else {
        console.log(`The indices of the elements which add up to the target element(${target}) are : ${result[0]} and ${result[1]}`);
    }
}

main();