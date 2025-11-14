const prompt = require('prompt-sync')();

function Conc(arr1) {
    return [...arr1,...arr1];
}

function main () {
    var arr1 = [], size = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(Conc(arr1));
}

main();