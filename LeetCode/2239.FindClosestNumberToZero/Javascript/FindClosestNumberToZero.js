const prompt = require("prompt-sync")();

function main() {
    let array1 = [], size = prompt("Enter the size of the array : ");

    for (let i = 0;i < size;i++) {
        array1.push(prompt(`Enter the ${i}th element of the array : `));
    }

    let result = findTheClosestNumberToZero(array1);

    console.log(result);
}

function findTheClosestNumberToZero(array1) {
    let result = Number.MAX_VALUE;
    
    for (let i of array1) {
        if (Math.abs(i) < Math.abs(result)) {
            result = i;
        }
    }

    if (result < 0 && array1.includes(Math.abs(result))) {
        return Math.abs(result);
    }

    return result;
}

main();