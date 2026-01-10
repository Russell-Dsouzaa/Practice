const prompt = require('prompt-sync')();

function firstOccurence(haystack,needle) {
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



    if (needle.length > haystack.length) {
        return -1;
    }

    for (let i = 0;i <= haystack.length - needle.length;i++) {
        let isFound = true;
        for (let j = 0;j < needle.length;j++) {
            if (haystack[i + j] !== needle[j]) {
                isFound = false;
            }
        }

        if (isFound) {
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

        return arr1.indexOf(needle);    // if successful, return the index of the first element of the first occurence(match), -1 otherwise

    */
}

function main() {
    var haystack = prompt("Enter a string as HayStack : "), needle = prompt("Enter a string as Needle : ");

    var result = firstOccurence(haystack,needle);
    console.log(result);
}

main();

/*
Learnings :-

    1. .indexOf() is an array method which checks for a substring within a string. If present, it returns the index of the first element of the 
    very first occurence(match), -1 otherwise.

    2. In JS, we could change .length property's value to mutate the original array. For example :- arrr1 = [1,2,3,4,5]; if we change arr1.length = 3; then the 
    arr1 becomes [1,2,3]. If we change arr1.length = 7; then the arr1 becomes [1,2,3,4,5,,] (where the array expands and has 2 empty spots). Note :- these spots 
    are not 'undefined', instead they're empty()google about this 'empty not undefined' thing, as in, what would be printed  if we index into one of these
    'empty' spots?) (num, checked it, it prints 'undefined')
*/