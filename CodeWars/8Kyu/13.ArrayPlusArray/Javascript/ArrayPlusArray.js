const prompt = require('prompt-sync')();

function sum(arr1,arr2) {
    let i = 0, j = 0, result = 0;

    while (i < arr1.length && j < arr2.length) {
        result += arr1[i++] + arr2[j++];
    }

    if (i < arr1.length) {
        while (i < arr1.length) {
            result += arr1[i++];
        }
    }

    if (j < arr2.length) {
        while (j < arr2.length) {
            result += arr2[j++];
        }
    }

    return result;
}

function main() {
    let size1 = Number(prompt("Enter the size of the first array : ")), size2 = Number(prompt("Enter the size of the second array : ")), array1 = [], array2 = [];

    for (let i = 0;i < size1;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the first array : `)));
    }

    for (let i = 0;i < size2;i++) {
        array2.push(Number(prompt(`Enter the ${i + 1}th element of the second array : `)));
    }

    console.log(`The sum of all the elements of [${array1}] and [${array2}] is ${sum(array1,array2)}`);
}

if (require.main === module) {
    main();
}