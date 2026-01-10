const prompt = require('prompt-sync')();

function LCP(array1) {
    var shortestLength = Math.min(...array1.map(str=>str.length)),j = 0; 

    for (let i = 0;i < shortestLength;i++) {
        for (var str of array1) {
            if (array1[0][j] !== str[j]) {
                return str.substring(0,j);  // 0 index is included while 'j' index is excluded
            }

            j++;
        }
    }

    return array1[0].substring(0,j);
}

function main() {
    var size = Number(prompt("Enter the size of the array : ")), array1 = [];

    for (let i = 0;i < size;i++) {
        array1.push(prompt(`Enter the ${i+1}th element of the array : `));
    }

    console.log(LCP(array1));
}

main();

/*
Learnings :-
    1. Math.min() function expects multiple comma separated values. Passing an array won't work since it would still be passed as one single input to the function.
    That is why, we use the spread operator (...)

    2. At LOC 4, I wanted to find the length of the shortest string in the array, We could use .map() function to create and use a temporary short-lived
    function. map() function doesn't modify the original array, instead ot returns an entirely new array
*/