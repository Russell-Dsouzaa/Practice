const prompt = require('prompt-sync')();

function SPA(array1) {
    if (array1.length % 2 !== 0) {
        console.log(1);
        return false;
    }

    let count = {};

    for (let i of array1) {
        if (i in count) {
            count[i] += 1;
        } else {
            count[i] = 1;  // There was no else block at first, I had this statement running at every iteration no matter what. That raised issues at runtime, resulting in incorrect outputs.
        }
    }

    for (let i of Object.values(count)) {
        if (i > 2) {
            return false;
        }
    }

    return true;
}

function main() {
    let size = Number(prompt("Enter the size of the array ")), array1 = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(SPA(array1));
}

if (require.main === module) {
    main();
}