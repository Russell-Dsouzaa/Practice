const prompt = require('prompt-sync')();

function numOfPairsWithAbsDiff(arr1,k) {
    var count = 0;

    for (let i = 0;i < arr1.length - 1;i++) {
        for (let j = i + 1;j < arr1.length;j++) {
            if (Math.abs(arr1[i] - arr1[j]) === k) {
                count++;
            }
        }
    }

    return count;
}

function main() {
    var size = Number(prompt("Enter the size of the Integer Array : ")), array1 = [], k = Number(prompt("Enter the value for 'k' : "));

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The number of pairs which satisfy the given conditions are : ${numOfPairsWithAbsDiff(array1,k)}`);
}

main();