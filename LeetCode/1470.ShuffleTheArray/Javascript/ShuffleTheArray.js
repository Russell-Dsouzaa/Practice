const prompt = require('prompt-sync')();

function STA(arr1) {
// assuming that we don't have to mutate and return the same array (i.e. arr1)

    var result = [], ptr1 = 0, ptr2 = Math.floor(arr1.length/2);  
    var n = ptr2;    // we do this so that we could use this variable later on in the definition of the for loop. Initially, we had used ptr2 in-place of 'n' in the for loop, which lead to an infinite loop :(

    for (let i = 0;i < n;i++) {
        result.push(arr1[ptr1++]);
        result.push(arr1[ptr2++]);
    }

    return result;


/* assuming that we DO have to mutate and return the same array (i.e. arr1)
   The below code snippet is incorrect(the one on leetcode too is incorrect). Idk how to mutate & return the same array yet.

    var ptr1 = 0, ptr2 = Math.floor(arr1.length / 2),j = 0;

    for (let i = 0; i < Math.floor(arr1.length / 2);i++) {
        let num1 = arr1[ptr1++], num2 = arr1[ptr2++];

        arr1[j++] = num1;
        arr1[j++] = num2;  

        // arr1.push(num1);
        // arr1.push(num2);  this won't work, since we would keep on increasing the length of 'arr1' and the loop would never end, also this would append elements at the END of the array instead of alternating spots
    }

    return arr1;
*/
}

function main() {
    var size = Number(prompt("Enter the size of the array(enter an even number, it's a constraint) : ")), arr1 = [];

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`${STA(arr1)}`);  //instead of passing in the value of n(refer to the problem description), I derive it in the STA() function & assign it to ptr2 variable
}

main();