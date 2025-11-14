const prompt = require('prompt-sync')();

function isPalindrome(num) {
// this assumes that the input could be either positive or negative

    var str = num.toString();
    var start = 0, end = str.length - 1;    // we had to initialize end variable after converting the number to a string, since .length property won't make sense on a number, it only works on strings

    while (start <= end) {
        if (str[start] === str[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }

    return true;

    /* assuming that the input's always going to be a positive Integer

        if (num < 0) {
            return false
        }

        num = Math.abs(num);

        var oppositeNum = 0;

        while (num > 0) {
            oppositeNum += num % 10;
            num = num / 10;
        }

        return oppositeNum === num;

        (Just realized that we could still use this method if we do the following : 1. take care of all negative inputs in a conditional statement and 2. use Math.abs() function on input(irrespective of whether they're +ve or -ve))
        We make these changes at LOC 22

        Dw, I implemented this method in alternative_solution/ directory
    */
}

function main() {
    var num = Number(prompt("Enter an Integer : "));

    console.log(isPalindrome(num));
}

main();

/*
Note :-

    1. Initially, two methods to solve this problem came to my mind : two pointer method(which requires us to convert the number into a string first), and, the one 
    where we use the % / method to get the opposite number and then compare the original and opposite numbers to check whether it's a palindrome
    But, then after looking at the examples and constraints, I realzed that the input might be a negative number(which means the input might contain a negative sign(-)). 
    In other words, the second method won't work when trying to find whether a number's a palindrome where the number is a negative number
*/