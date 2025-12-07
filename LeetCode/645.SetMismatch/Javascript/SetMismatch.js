const prompt = require('prompt-sync')();

function findErrorNums(arr1) {
    var missingElem = (arr1.length * (arr1.length + 1)) / 2, set1 = new Set(), dup = arr1[0];

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

function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [];

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result = findErrorNums(arr1);

    console.log(`The duplicate element is : ${result[0]} while the number which was lost is : ${result[1]}`);
}

main();

/*
This method works for arrays ordered in ascending order. Also, I thought of using 'Set()' method as an alternative, but that too doesn't take the array's order into account.


    // var dup = nums[0], missingElem = nums[0];    (just realized that we need not store the answer in variables and then return the variables. Instead, we could just return the result as soon as we find them.)

    if (nums.length < 1) {    // ik, constraints say other otherwise. length of the array won't go below 2
        return [-1,-1];
    }

    // our program won't work if the very first element itself has the duplicate element. So, we take care of that case in the this conditional statement
    if (nums[0] !== 1) {
        return [nums[0],1];
    }

    for (let i = 0;i < nums.length;i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            return [nums[i+1],nums[i] + 1];
        }
    }



*/

/*
Learnings :-

    1. Even though it isn't emntioned anywhere in the problem's description, the input array's order could either be ascending or descending. Hence, we had to change our approach to the problem.
*/