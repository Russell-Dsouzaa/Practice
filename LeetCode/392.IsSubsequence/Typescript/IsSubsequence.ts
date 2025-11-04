import * as PromptSync from 'prompt-sync'
const prompt = PromptSync();

function main() {
    let s : string = prompt("Enter the first string : "), t : string = prompt("Enter the second string : ");

    var result : boolean = isSubsequence(s,t);  // we use this variable instead of directly calling this function in cocnsole.log() function, because I wanted to use type-checking

    console.log(result);
}

function isSubsequence(s,t) {
    if (s === t) {
        return true;
    } else if (t.length < s.length) {
        return false;
    }

    let i : number = 0;

    for (let j of t) {
        if (s[i] === j) {
            i++;
        }
    }

    if (i === s.length) {
        return true;
    } else {
        return false;
    }
}

main();