"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function main() {
    var word1 = prompt("Enter the first word : "), word2 = prompt("Enter the second word : ");
    var result = Merge(word1, word2); // Here, unlike the JS solution, we don't call the Merge() function directly in console.log statement. This is because we wanted to type-check what output is returned by the Merge() funciton.
    console.log(result);
}
function Merge(word1, word2) {
    if (word1.length === 0 && word2.length === 0) {
        return "Both input strings were empty";
    }
    else if (word1.length === 0) {
        return word2;
    }
    else if (word2.length === 0) {
        return word1;
    }
    var i = 0, j = 0, result = '';
    // var k = 0;
    while (i < word1.length && j < word2.length) {
        // result[k++] = word1[i++];    Shit like this doesn't work since, strings are immutable in JS (and pretty much every other programming language)
        // result[k++] = word2[j++];
        result += word1[i++];
        result += word2[j++];
    }
    if (i < word1.length) {
        while (i < word1.length) {
            result += word1[i++];
        }
    }
    if (j < word2.length) {
        while (j < word2.length) {
            result += word2[j++];
        }
    }
    return result;
}
main();
/*
Learnings :-
    1. We tried indexing into the 'result' string to add each letter into it. But unfortunately, this shit doesn't fly since, strings are immutable in almost every programming language including JS.
*/ 
