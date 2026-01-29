const prompt = require('prompt-sync')();

function count(jewels,stones) {
    let set1 = new Set(), count = 0;;

    for (let i of jewels) {
        set1.add(i);
    }

    for (let i of stones) {
        if (set1.has(i)) {
            count++;
        }
    }

// alternative solution
    // for (let i of stones) {
    //     if (jewels.includes(i)) {
    //         count++;
    //     }
    // }

    return count;
}

function main() {
    let jewels = prompt("Enter the characters which represent jewels(in one single string) : "), stones = prompt("Enter the characters which represent stones(in one single string) : ");

    var result = count(jewels,stones);
    console.log(`The number of jewels in stones are : ${result}`);
}

main();