"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function numOfPairsWithAbsDiff(arr1, k) {
    var count = 0;
    for (var i = 0; i < arr1.length - 1; i++) {
        for (var j = i + 1; j < arr1.length; j++) {
            if (Math.abs(arr1[i] - arr1[j]) === k) {
                count++;
            }
        }
    }
    return count;
}
function main() {
    var size = Number(prompt("Enter the size of the array : ")), array1 = [], k = Number(prompt("Enter the value of 'k' : ")); // I know, JS & TS implicitly assign datatypes for variables. So, type schecking is not required when we declare AND initialize a variable for the very first time. But, I do it anyways because, in future, there is a possibility that we might over-write the variable with a value of different datatype. So, in order to avoid such cases, I prefer to type-check(is this the correct term ? idk) variables at all places I can
    for (var i = 0; i < size; i++) { // keeping the previous comment line(LOC) in mind, I know, I do understand  that here, in this case the value of 'i' is 0, no need to type-check it. But again, I feel like(emphasis on the word feel) that during the loop, there is a possibility that the value of i might get over-written with another value(which might not be a number). Also, I do understand that it doesn't account for cases where-in the value in 'i' gets over-written by another value which is also a number(in that case, type-checking won't help us at all)
        array1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the Integer Array : "))));
    }
    var result = numOfPairsWithAbsDiff(array1, k); // I know (baap ko mat sikha), I didn't call the function directly within the console.log() function because I wanted to type-check the function's return value
    console.log("The number of pairs which satisfy the given conditions are : ".concat(result));
}
main();
/*
    1. Saw it in a Primeagen video(as one does), that in TS & JS, there's two ways to assign type to a variable, implicit and explicit. Implicit is where we tell the compiler what datatype we're
    storing in a varibale using type annotaions etc(google these 'ways/methods). Explicit is where the transpiler/JIT compiler understands what datatype to assign to a variable by looking at what
    value the variable stores
*/ 
