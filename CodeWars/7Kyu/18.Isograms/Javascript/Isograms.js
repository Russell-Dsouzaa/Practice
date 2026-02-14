const prompt = require('prompt-sync')();

function isAnagram(str) {
    let set = new Set();

    for (let i of str) {
        if (set.has(i.toLowerCase())) {
            return false;
        } else {
            set.add(i.toLowerCase());
        }
    }

    return true;
}

function main() {
    let str = prompt("Enter a string : ");

    console.log(isAnagram(str));
}

if (require.main === module) {
    main();
}