const prompt = require('prompt-sync')();

function isSubsequence(s,t) {
    if (s === t) {
        return true;
    } else if (t.length < s.length) {
        return false;
    }

    let i = 0;

    for (let j of t) {
        if (j === s[i]) {
            i++;
        }
    }

    if (i === s.length) {
        return true;
    } else {
        return false;
    }
}

function main() {
    let s = prompt("Enter the first string : "), t = prompt("Enter the second string : ");

    console.log(isSubsequence(s,t));
}

main();