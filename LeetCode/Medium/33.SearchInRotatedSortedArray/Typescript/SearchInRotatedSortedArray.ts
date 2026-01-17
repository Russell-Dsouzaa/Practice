import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

const rotate = require('../../189.RotateArray/Javascript/RotateArray.js');

function search (nums : number[], target : number) : number {
    var start : number = 0, end : number = nums.length - 1;

    while (start <= end) {
        let middle : number = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] >= nums[start]) {
            if (nums[start] <= target && nums[middle] >= target) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        } else {
            if (nums[middle] <= target && target <= nums[end]) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
    }

    return -1;
}

function main() : void {
    var nums : number[] = [], size : number = Number(prompt("Enter the size of the array : ")), k : number = Number(prompt("Enter the number of spots by which to left-shift the array elements : ")), target : number = Number(prompt("Enter the target element : "));
    
    for (let i = 0;i < size;i++) {
        nums.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }
    
    // we normalize 'k'. That is, we force k's value within our expected range of (0 to nums.length - 1)
    // This MUST be done AFTER the array is populated, otherwise nums.length is 0
    k = k % nums.length;
    k = nums.length - k;  // now, k can be used for left-shift

    rotate(nums,k);

    var result : number = search(nums,target);  // 'nums' here isn't the same as user entered. It has been rotated permanently(original array has been modified instead of a copy)

    if (result === -1) {
        console.log(`${target} isn't present in ${nums}`);
    } else {
        console.log(`${target} is present at index ${result}(0-indexed)`);
    }
}

main();

/*
Learnings :-

    1. Initially, for some reason, the array was being proted in parts(4 elements per line). To solve this, we used array1.join( ). This forces the array
     to be printed in one single line.

    2. 'rotate' function shifts array elements to the right, but in this LeetCode problem, we need to shift array elements to the left instead. We do this using : left shift(n) === right shift(arr.length - n)

    3. Instead of using 'array1.length' over and over again in our programs, we should store it's value in a variable and then use that variable wherever necessary. This is because, every time we 
     call array1.length, teh compiler calculates the length of the array by treaversing the entire array. Storing it in an array makes the lookup quick.
     (Nevermind, apparently, array.length is a stored property and it's lookup time is O(1), so all of the above is unnecesary)

    4. We figured out in point 2. how to convert the value of 'k' to convert right-shift into left-shift. But, then we were worried about cases where k > nums.length. To solve this, we implemented
     a method which we also implemented in 189. problem's solutions. We normalized 'k' before converting it to fit left-shift. Here, our program excepts 'k' to be within the range 0 to 
      nums.length - 1, otherwise it breaks. To normalize, means, to force the value of 'k' wihtin a certain range, in our case, we force it within the range of 0 to nums.length - 1.

    5. initially, we had LOC 40 and 41 after populating the array using 'for' loop. Due to this, the rotated array used to be returned as empty and the result
    would always be wrong/fail
*/