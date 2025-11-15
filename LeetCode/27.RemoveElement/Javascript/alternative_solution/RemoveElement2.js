const prompt = require('prompt-sync')();

function rmElements(arr1,target) {
    var result = 0;

    for (let i = 0;i < arr1.length;i++) {
        if (arr1[i] === target) {
            arr1[i] = 101;    // we do this because the contrainsts specify that the elements cannot be greater than 100
            result++;
        }
    }

    arr1.sort((a, b) => a - b);

    return arr1.length - result;
}

function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [], target = Number(prompt("Enter the target Integer : "));

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result = rmElements(arr1,target);

    console.log(`Original Array : ${arr1}, look at the first ${result} elements.`);
}

main();