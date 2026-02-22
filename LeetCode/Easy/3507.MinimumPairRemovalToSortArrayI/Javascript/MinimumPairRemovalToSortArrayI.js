const prompt = require('prompt-sync')();

function minPairRemoval(arr) {
    let count = 0;

    if (nonDecreasing(arr) || arr.length < 1) {
        return count;
    }

    do {
        let minSum = Infinity, index1 = 0, index2 = 1;

        for (let i = 0;i < arr.length - 1;i++) {
            if ((arr[i] + arr[i + 1]) < minSum) {
                minSum = arr[i] + arr[i + 1];
                index1 = i;
                index2 = i + 1;
            }
        }

        arr.splice(index1,2,minSum);
        count++;

    } while (!nonDecreasing(arr));

    return count;

    function nonDecreasing(array) {
        for (let i = 0;i < array.length - 1;i++) {
            if (array[i + 1] < array[i]) {
                return false;
            }
        }

        return true;
    }
}

function main() {
    let size = Number(prompt("Enter the size of the array : ")), array = [];

    for (let i = 0;i < size;i++) {
        array.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The minimum number of operations : ${minPairRemoval(array)}`);
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. If the argument array has length of 1, then the for loops at LOCs 13 and 29 won't execute. To solve this issue, we put a check for array length at LOC 6
*/