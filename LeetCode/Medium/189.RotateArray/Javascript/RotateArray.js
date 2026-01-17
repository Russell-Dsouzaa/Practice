const prompt = require('prompt-sync')();

function rotate(nums, k) {  // as given in the Leetcode problem (not mentioned in the problem description, it's mentioned in the JSDoc comment at the top of the program), it is mentioned to not return anything but to instead, modify the existing 'nums' array
    // if (nums.length == 1) {
    //     return;    // this takes care of the condition where the input array size equals 1. But it doesn't fix the underlying issue(which is, when nums.length < k). Our solution only works for inputs where nums.length > k
    // }
    
    k = k % nums.length;  // nvm, this LOC which we stole from the alternative solution, fixes the problem. Now our program work for the condition where-in k > nums.length

    var result = [], j = 0;

    for (let i = 0;i < nums.length - k;i++) {
        result[i + k] = nums[i];
    }

    for (let i = nums.length - k;i < nums.length;i++) {
        result[j++] = nums[i];
    }

    // nums = temp;  // doesn't modify the original array - it only reassigns the local nums variable to point to a new array. The original array outside the function remains unchanged.

    // since the above LOC doesn't work as expected, we manually copy the 'temp' array onto 'nums' array

    for (let i = 0;i < nums.length;i++) {
        nums[i] = result[i];
    }
}

function main() {
    var nums = [], k = Number(prompt("Enter the value of 'k' : ")), size = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        nums.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log("Before rotating : " + nums);
    rotate(nums,k);
    console.log("After rotating the array : " + nums);
}

if (require.main === module) {
    main();
}

module.exports = rotate;

/*
Learnings :-
    1. just learned this, when we pass variables of primitive data types(numbers, strings etc) to functions, they are passed by value(i.e. a copy of the variable is passed to the 
    function, any change does to the copy won't affect the original variable) whereas when we pass variables of non-primitive data types(objects, arrays etc) to functions, they are passed by 
    reference (that is, changes made to the passed variable in the called function, would affect the original variable as well).

    2. Initially, our program only worked for inputs where nums.length > k and that too we did my creating an extra temporary array, it wasn't working for inputs where k > nums.length. But,
    after implementing LOC 8, our program now works for inputs where nums.length < k too :)

    3. In rotate() function, nums = temp; LOC doesn't work as expected. That is because, it only modifies the local variable within the rotate(). Now, as point 1. of 'Learnings' expalined, that 
    non-primitive data types are passed by refernce. Then, by that logic, nums = result should work. But it doesn't work because when we call rotate() in main(), the memory address of the very first
     element of nums array is passed, and nums = result replaces mem add of nums first element by memory address of result's first element. This would leave our original 'nums' array unmodified.


Note : 
    1. This solution passed only 27 out of 40 testcases on LeetCode. The alternative solution passes all 40 testcases(under /alternative_solution directory).
    2. This solution require additional memory(space). I couldn't find a solution to modify the original array in-place :( alternative solution modifies the original array directly wihout the use of additional space/memory
    3. takes care of the condition where the input array size equals 1. But it doesn't fix the underlying issue(which is, when nums.length < k). Our solution only works for inputs
     where nums.length > k. Nvm, LOC 8 fixes this issue, now our program takes nums.length < k condition into account too.
*/