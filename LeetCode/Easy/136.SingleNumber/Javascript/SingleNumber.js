const prompt = require('prompt-sync')();

function singleNumber(arr) {
    let map = {};

    for (let i of arr) {
        if (i in map) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }

    for (let i of Object.keys(map)) {
        if (map[i] < 2) {
            return Number(i);
        }
    }

    return -1;
}

function main() {
    let size = Number(prompt("Enter the size of the array : ")), arr = [];

    for (let i = 0;i < size;i++) {
        arr.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The element which appears only once is : ${singleNumber(arr)}`);
}

if (require.main === module) {
    main();
}