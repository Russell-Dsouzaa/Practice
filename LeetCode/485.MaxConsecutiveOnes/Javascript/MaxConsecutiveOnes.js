const prompt = require('prompt-sync')();

function maxConsecutiveOnes(arr1) {
    var i = 0, globalCount = 0;

    while (i < arr1.length) {
        var localCount = 0;

        if (arr1[i] === 1) {
            while (arr1[i] === 1) {
                localCount++;
                i++;
            }
        } else {
            while (i < arr1.length && arr1[i] === 0) {
                i++;
            }
        }

        if (localCount > globalCount) {
            globalCount = localCount;
        }
    }

    return globalCount;
}

function main() {
    var arr1 = [], size = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result = maxConsecutiveOnes(arr1);
    console.log(`The maximum number of consecutive ones in the given array is : ${result}`);
}

main();