const prompt = require('prompt-sync')();

function missingNum(nums) {
    let sumOfNNaturalNumbers = (nums.length * (nums.length + 1)) / 2, runningSum = 0;

    for (let i of nums) {
        runningSum += i;
    }

    return sumOfNNaturalNumbers - runningSum;
}

function main() {
    let size = Number(prompt("Enter the size of the array : ")), array1 = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array(start from 0, we assume some input arrays can contain 0) : `)));
    }

    var result = missingNum(array1);
    console.log(`The missing number is ${result}, while the size of the supposed array is ${size + 1}`);
}

main();