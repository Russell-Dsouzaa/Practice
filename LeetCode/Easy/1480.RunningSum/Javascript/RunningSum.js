const prompt = require('prompt-sync')();

function runningSum(arr) {
    // var result = [];  // we could modify the original array and then return it(to satisfy the requirement of return a number array) or we could create a separate array and modify it

    for (let i = 1;i < arr.length;i++) {
        arr[i] += arr[i - 1];
    }

    return arr;
}

function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr = [];

    for (let i = 0;i < size;i++) {
        arr.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`Original array : ${arr} \n Running Sum of it : ${runningSum(arr)}`);
}

main();

/*
Learnings :-

    1. The reason why, at LOC 20, original array is NOT the same as runningSum array, is because the function 'runningSum()' is being called after 'arr' is already evaluated/prinited onto the console.
*/