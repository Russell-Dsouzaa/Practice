const prompt = require('prompt-sync')();

function Conc(arr1) {
    var ptr1 = 0, ptr2 = arr1.length, result = [];

    for (let i of arr1) {
        result[ptr1++] = i;
        result[ptr2++] = i;
    }

    return result;
}

function main () {
    var arr1 = [], size = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    // var result = Conc(arr1);
    console.log(Conc(arr1));
}

main();