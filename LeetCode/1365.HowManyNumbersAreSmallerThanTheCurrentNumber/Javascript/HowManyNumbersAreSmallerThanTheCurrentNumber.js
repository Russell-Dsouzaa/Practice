const prompt = require('prompt-sync')();

function count(array1) {
    var result = [];

    for (let i = 0;i < array1.length;i++) {
        let temp = 0;

        for (let j = 0;j < array1.length;j++) {
            if (array1[j] < array1[i]) {
                temp++;
            }
        }

        result.push(temp);
    }

    return result;
}

function main() {
    var arr1 = [], size = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i}th element of the array : `)));
    }

    console.log(count(arr1));
}

main();