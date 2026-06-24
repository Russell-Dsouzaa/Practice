"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function MAD(arr1) {
    var result = [], sortedArray = arr1.sort(function (a, b) { return a - b; }), minDist = Number.MAX_VALUE; // we do MAX_VALUE assuming that the minimum distance could be 0 (we could've taken any -ve value as well, since absolute distances are calculated in positive values)
    for (var i = 0; i <= sortedArray.length - 2; i++) {
        if ((sortedArray[i + 1] - sortedArray[i]) < minDist) {
            minDist = sortedArray[i + 1] - sortedArray[i];
        }
    }
    for (var i = 0; i <= sortedArray.length - 2; i++) {
        if (sortedArray[i + 1] - sortedArray[i] === minDist) {
            result.push([sortedArray[i], sortedArray[i + 1]]);
        }
    }
    return result;
}
function main() {
    var size = Number(prompt("Enter the size of the input array : ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the input array : "))));
    }
    var result = MAD(array1);
    console.log("The pairs of elements with the minimum absolute difference are as follows : ", result);
}
if (require.main === module) {
    main();
}
/*
Learnings :-

    1. In 'MAD' function, we sort the input array in ascending order. This is because we need to find the minimum absolute difference between any two elements of the array. By, sorting the array in
    ascending order, we need to check for absolute difference between only adjacent elements instead of checking for all element pairs. Also, it by default, ensures that all elements are sorted in
    ascending order, since we need to return pairs of elements, arranged in ascending order.

    2. (Continuation of point 1) Also, by sorting the input array in ascending order, we don't need to worry about using Math.abs() method while calculating the absoulte difference between two
    array elements, since the right element would always be greater than the the left one.

    3. At LOC 30, Initially we printied the result as follows console.log(`answer test ${result}`); , now this logged the resulting array in the console as follows : [1,2,2,3,3,4] instead of the
    expected [[1,2], [2,3], [3,4]]. This is because ${} converts the variable's datatype to 'string' by default. So, after a litle bit of googling, we did find a work-around it. We don't use ${},
    instead we use it's alternative console.log("answerText",variable_name);
*/ 
