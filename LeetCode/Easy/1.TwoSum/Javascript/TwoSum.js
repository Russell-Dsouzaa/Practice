const prompt = require('prompt-sync')();

function TwoSum (arr1,target) {
    for (let i = 0;i < arr1.length - 1;i++) {
        for (let j = i + 1;j < arr1.length;j++) {
            if (arr1[j] == target - arr1[i]) {
                return [i + 1,j + 1];
            }
        }
    }

    return (-1);
}

function main() {
    var array1 = [];
    var size = Number(prompt("Enter the size of the array : "));

    for (let i = 0; i < size;i++) {
        let a = Number(prompt(`Enter the ${i}th element of the array : `));
        array1.push(a);
    }

    var target = Number(prompt("Enter the target element : "));

    var result = TwoSum(array1,target);

    if (result == -1) {
        console.log(`No two numbers in the array add upto the target element(${target})`);
    } else {
        console.log(`The indices of the numbers which add upto ${target} are : ${result[0]} and ${result[1]}`);
    }
}

main();

/*
    prompt() does not work in node's default environment. It works as expected in browser environment. 
    To make it work in out VSCode, we need to follow the following steps :
        1. run `npm install prompt-sync` in the terminal
        2. include the following LOC in the .js file, preferrably at the beginning of the file, `const prompt = require('prompt-sync)();`
*/