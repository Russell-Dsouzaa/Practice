const prompt = require('prompt-sync')();

function rmDuplicates(arr1) {
    if (arr1.length < 2) return arr1;

    var k = 0;

    for (let i = 0;i < arr1.length;i++) {
        while (i < arr1.length - 1 && arr1[i] === arr1[i + 1]) {
            i++;
        }

        arr1[k++] = arr1[i];
    }

    return k;
}

function main() {
    var size = Number(prompt("Enter the size of the array : ")), arr1 = [];

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`Total number of unique elements in the given array : ${rmDuplicates(arr1)}`);
}

main();