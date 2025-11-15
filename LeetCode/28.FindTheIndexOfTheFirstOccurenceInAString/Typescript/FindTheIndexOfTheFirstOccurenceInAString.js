"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function firstOccurence(haystack, needle) {
    // var k = 0;
    // for (let i = 0;i < haystack.length;i++) {
    //     if (haystack[i] === needle[k]) {
    //         k++;
    //     } else {
    //         k = 0;
    //     }
    //     if (k === needle.length) {
    //         return i - needle.length + 1;
    //     }
    // }
    // return -1;
    // This method works fine for most inputs. It fails for input : haystack = ""mississippi"" , needle = "issip"
    if (needle.length > haystack.length)
        return -1;
    for (var i = 0; i < haystack.length - needle.length; i++) {
        var isPresent = true;
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isPresent = false;
            }
        }
        if (isPresent) {
            return i;
        }
    }
    /*
    
    alternative method :-

    for (let i = 0;i <= haystack.length - needle.length;i++) {
        if (haystack.substr(i,needle.length) === needle) {
            return i;
        }
    }

    */
    return -1;
    /* alternative method is to use .indexOf() array method

        return arr1.indexOf(needle);    // if successful, return the index of the first element of the first occurence, -1 otherwise

    */
}
function main() {
    var haystack = prompt("Enter a string as HayStack : "), needle = prompt("Enter a string as Needle : ");
    var result = firstOccurence(haystack, needle);
    console.log(result);
}
main();
