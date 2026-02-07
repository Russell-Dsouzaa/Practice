const prompt = require('prompt-sync')();

function maxAndMin(arr1) {
    // ik, in problem's description, they've explicitly asked us to create two separate functions. But, here, I mushed them into one single function

    let max = -Infinity, min = Infinity;  // Number.MIN_VALUE is the lowest postive value (0.0000000... something)

    for (let i of arr1) {
        if (i > max) {
            max = i;
        } 
        
        if (i < min) {  // we didn't put this under 'else-if' to tackle cases where the size of the input array is 1
            min = i;
        }
    }

    return [max,min];
}

function main() {
    let size = Number(prompt("Enter the size of the integer array : ")), array1 = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    let result = maxAndMin(array1);
    console.log(`The maximum and minimum values in the given array [${array1}] are : ${result[0]} and ${result[1]} respectively.`);
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. At LOC 11, we had put the second conditional statement within 'else-if' block, but then, input arrays of size 1, one of the values(either min or max)
     would remain Number.MIN/MAX_VALUE
    
    2. At LOC 6, Number.MIN_VALUE doesn't work as expected, since it is the smallest +ve value(0.0000000... something). So for -ve values, the conditional 
    statement at LOC 9 would be false ehen it should be true(for -ve values (including 0 too, I think))
*/

// Note :- An alternative method would be to sort the array in either ascending or descending order, and then returning the first and last elements of the sorted array.