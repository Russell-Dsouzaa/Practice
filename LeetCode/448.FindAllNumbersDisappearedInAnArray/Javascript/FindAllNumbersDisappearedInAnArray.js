const prompt = require('prompt-sync')();

function DisappearedNumbers(array1) {
    for (let i of array1) {
        if (array1[Math.abs(i) - 1] > 0) {
            array1[Math.abs(i) - 1] = -array1[Math.abs(i) - 1];
        }
    }

    var result = [];

    for (let i = 0;i < array1.length;i++) {
        if (array1[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}

function main() {
    var array1 = [], size = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(DisappearedNumbers(array1));
}

main();


/*

Learnings :-

    1. At LOC 5 and 6, we needed to added modulus method, because as we traverse through the array and make changes to random items in the array, the for loop can't keep up with the changes made.
    In simpler terms, by the time the for loop reaches the further indices of the array, those values already would've been modified. (To understand better, try executing the program after removing the Math.abs() methods)

    2. At LOC 6, to convert an integer into it's negative counterpart, we could simply put a negative symbol in front of the expression or integer. Another way, which I usually use is, multiplying 
    the integer with negative one (-1)

*/

/*

Note :- The first attempt (commented out) on LeetCode, is incorrect

*/