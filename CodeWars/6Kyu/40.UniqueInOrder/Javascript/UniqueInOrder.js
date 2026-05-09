const prompt = require('prompt-sync')();

function uniqueInOrder(str) {
    let result = [];

    for (let i of str) {
        if (result[result.length - 1] !== i) {
            result.push(i);
        }
    }

    return result;
}

function main() {
    let str = prompt("Enter an input in the sorm of a String : ");

    console.log(`The resulting array is : ${uniqueInOrder(str)}`);
}

if (require.main === module) {
    main();
}

// Note :- In the problem's description, it is given that the input could be a string or an array of numbers. In our implementation, we've only accounted for string inputs. So, for now if you 
// wish to test numeric array inputs, just pass them as a string input (without any whitespaces)