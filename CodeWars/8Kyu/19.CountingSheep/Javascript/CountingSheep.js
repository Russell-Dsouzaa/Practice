const prompt = require('prompt-sync')();

function count(arr1) {
    let falseCount = 0;

    for (let i of arr1) {
        if (i !== true) {
            falseCount++;
        }
    }

    return arr1.length - falseCount;
}

function main() {
    let size = Number(prompt("Enter the size of the array : ")), arr1 = [];

    for (let i = 0;i < size;i++) {
        arr1.push((prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    cleanedArr = arr1.map(elem => elem.toLowerCase() === 'true');

    console.log(count(cleanedArr));
}

if (require.main === module) {
    main();
}

/*
Learnings :- 

    1. At LOC 19, using Boolean(prompt()) considers 'false' as true, it considers non-empty strings as true and empty strings as false. So it doesn't work as we intended.

*/