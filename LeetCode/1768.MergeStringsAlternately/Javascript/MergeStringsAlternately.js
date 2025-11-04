const prompt = require('prompt-sync')();

function Merge(word1,word2) {
    if (word1.length === 0 && word2.length === 0) {
        return 'Both input strings were empty';
    } else if (word1.length === 0) {
        return word2;
    } else if (word2.length === 0) {
        return word1;
    }

    var result = "",i = 0,j = 0;

    while (i < word1.length && j < word2.length) {
        // result.push(word1[i++]);      .push doesn't work on strings, it's an array-exclusive function
        // result.push(word2[j++]);
        result += word1[i++];
        result += word2[j++];
    }

    if (i < word1.length) {
        while (i < word1.length) {
            // result.push(word1[i++]);
            result += word1[i++];
        }
    }

    if (j < word2.length) {
        while (j < word2.length) {
            // result.push([j++]);
            result += word2[j++];
        }
    }

    return result;
}

function main() {
    let word1 = prompt("Enter the first word : "), word2 = prompt("Enter the second word : ");

    console.log(Merge(word1,word2));
}

main();

/*
Learnings :-

    1. .push cannot be used on strings, it's an array-exclusive function
*/