const prompt = require('prompt-sync')();

function isPalindrome(num) {
    if (num < 0) {
        return false;
    } else if (num < 10) {  // without this LOC, if we enter single-digit numbers(except for 0), the function would return false. This is because, in the while loop, 'oppositeNum' gets multiplied by 10, so if we enter a single-digit number, the original number would be single digit while the opposite number would have two-digits
        return true;
    }

    var oppositeNum = 0,temp = num;

    while (temp > 0) {
        oppositeNum = oppositeNum * 10 + (temp % 10);  // this works, beacause at the very first iteration, 0 * 10 would return 0. Also, the reason why we had to include 'oppositeNum' in this LOC and not in the a separate LOC, is because, if we did that, the end result won't equal num(even when it's a palindrome) since the oppositeNum would be num * 10 before the loop ends during the final iteration (eg:- 1210(oppositeNum) !== 121(num))
        temp = Math.floor(temp / 10);
    }

    return num === oppositeNum;
}

function main() {
    var num = Number(prompt("Enter an Integer : "));

    console.log(isPalindrome(num));
}

main();

/*
Learnings :-

    1. Btw, all single digit numbers are palindromes apparently (0,1,2,3,4,5,6,7,8 & 9).
*/

// Note :- LOC 13 makes LOC 6 redundant, since LOC 13 now takes care of single-digit numbers