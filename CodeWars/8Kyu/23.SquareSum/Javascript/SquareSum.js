const prompt = require('prompt-sync')();

function squareSum(arr) {
    let result = 0;

    for (let i of arr) {
        result += i * i;
    }

    return result;
}

function main() {
    let size = Number(prompt("Enter the size of the array : ")), arr = [];

    for (let i = 0;i < size;i++) {
        arr.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(squareSum(arr));
}

if (require.main === module) {
    main();
}