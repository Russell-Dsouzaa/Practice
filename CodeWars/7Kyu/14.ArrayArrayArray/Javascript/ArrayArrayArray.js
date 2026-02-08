const prompt = require('prompt-sync')();

function explode(arr1) {
    let result = [], score = 0;

    if (typeof(arr1[0]) === 'number' && typeof(arr1[1]) === 'number') {
        score = arr1[0] + arr1[1];
    } else if (typeof(arr1[0]) === 'number') {
        score = arr1[0];
    } else if (typeof(arr1[1]) === 'number') {
        score = arr1[1];
    } else {
        return "Void!";
    }

    // if (Number.isNaN(arr1[0]) === false && Number.isNaN(arr1[1]) === false) {
    //     score = arr1[0] + arr1[1];
    // } else if (Number.isNaN(arr1[0]) === false) {
    //     score = arr1[0];
    // } else if (Number.isNaN(arr1[1] === false)) {
    //     score = arr1[1];
    // } else {
    //     return "Void!";
    // }

    for (let i = 0;i < score;i++) {
        result.push(arr1);
    }

    return result;
}

function main() {
    let arr = [];

    for (let i = 0;i < 2;i++) {
        arr[i] = prompt(`Enter the ${i + 1}th element of the array : `);
    }

    // we convert the strings representing numbers, into numbers
    arr = arr.map(elem => {
        let num = Number(elem);
        return Number.isNaN(num) ? elem : num;
    });

    console.log(explode(arr));
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. In the if-else conditional blocks, we cannot use `Number.isNaN()`. We initially assumed that it would return false only if the passed argument was a number, or else it would return true for 
    every other datatype value. But that is not true. It return true only for the value 'NaN' and for everything else, it returns false. So, in our array, which contains both strings and numbers,
    it returns false for both strings AND numbers, since neither of them are equal to 'NaN'.
*/