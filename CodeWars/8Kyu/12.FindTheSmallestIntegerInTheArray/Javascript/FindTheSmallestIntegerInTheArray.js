const prompt = require('prompt-sync')();

function findSmallestInteger(arr1) {
    arr1.sort((a,b) => a - b);

    return arr1[0];
}

function main() {
    let size = Number(prompt("Enter the size of the array : ")), array1 = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The smallest element in [${array1}] is ${findSmallestInteger(array1)}`);
}

if (require.main === module) {
    main();
}