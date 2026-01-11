const prompt = require('prompt-sync')();

var presence = false;  // this is to check whether the 'target' element in present in the array or not

function search(arr, target) {
    // this program (using Binary Search) won't work for cases where-in, 1) the input array is empty, 2) value os target is less than every element of the input array and/or 3) value of target is greater than every element of the array

    // to take care of those edge cases, we implement the following conditional statements
    if (arr.length < 1) {
        return 0;
    } else if (target < arr[0]) {
        return 0;
    } else if (target > arr[arr.length - 1]) {
        return arr.length;
    }

    // if (arr.includes(target)) {
    //     presence = true;    
    //     return arr.indexOf(target);
    // }

    var start = 0, end = arr.length -1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === target) {
            presence = true;
            return middle;
        } else if (arr[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return start;    
}

function main() {
    var size = Number(prompt("Enter the size of the sorted array : ")), arr = [], target = Number(prompt("Enter the value for 'target' : "));

    for (let i = 0;i < size;i++) {
        arr.push(Number(prompt(`Enter the ${i + 1}th element of the array(Enter them in ascending order) : `)));
    }

    var result = search(arr, target);

    if (presence) {
        console.log(`${target} is present in the input array at ${result} index(0-indexed)`);
    } else {
        console.log(`${target} is not present in the input array, it would be present at ${result} index`);
    }
}

main();

/*
Learnings :- 

    1. (Not sure whether this point falls under Learnings, or Note, but nevertheless here it goes) Initially, I was returning middle or middle + 1 as the final output. But after tracking each variable's
    position(index) at the end of the while-loop, 'start' variable was ending-up on the position where the 'target' value would be inserted.

Note :-

    1. Initially, we used LOC 17-19 to check the presence of 'target' in 'arr' array. But, by default, underneath the hood, it uses Linear search to look of the element's index instead of Binary Search.
    This is because, sometimes, .indexOf() method might not be used on sorted arrays, so EMCA implemented linear search underneath the hood.
*/