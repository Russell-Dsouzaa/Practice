const prompt = require('prompt-sync')();

function main() {
    var size = Number(prompt("Enter the size of the array : "));
    var array1 = [];

    for (let i = 0;i < size;i++) {
        array1[i] = Number(prompt(`Enter the ${i + 1}th element of the array : `));
        // array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var target = Number(prompt("Enter the target element : "));

    var result = TwoSum(array1,target);

    if (result == null) {
        console.log(`No two array elements add up to ${target}`);
    } else {
        console.log(`Indices of the array elements which add up to ${target} are : ${result[0] + 1} and ${result[1] + 1}`);
    }
}

function TwoSum(arr1,target) {
    const map = {};

    for (let i = 0;i < arr1.length;i++) {
        if (map[target - arr1[i]]) {
            return [map[target - arr1[i]],i];
        } else {
            map[arr1[i]] = i;
        }
    }

    return null;
}

main();