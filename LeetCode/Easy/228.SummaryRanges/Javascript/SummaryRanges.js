const prompt = require('prompt-sync')();

function main() {
    var size = Number(prompt("Enter the size of the array : ")), array1 = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i+1}th element of the array : `)));
    }

    console.log(summaryRanges(array1));
}

function summaryRanges(array1) {
    let start = array1[0], end = array1[0],result = [];

    for (let i = 0;i < array1.length - 1;i++) {

        if (array1[i + 1] === array1[i] + 1) {

            end = array1[i + 1];

        } else {

            if (start === end) {

                result.push(`${start}`);

            } else {

                result.push(`${start}->${end}`);
            }

            start = array1[i + 1];
            end = array1[i + 1];
        }
    }

    if (start === end) {

        result.push(`${start}`);

    } else {

        result.push(`${start}->${end}`);
        
    }

    return result;
}

main();