const prompt = require('prompt-sync')();                          // required to accept user input

function main() {
    var number1 = Number(prompt("Enter an Integer : "));

    var result = CountLargestGroup(number1);

    console.log(`Result : ${result}`);
}

function CountLargestGroup(n) {
    const count = {};
    var result = 0;

    for (let i = 1;i <= n;i++) {
        var tempSum = 0;
        let temp = Math.abs(i).toString();

        for (let j = 0;j < temp.length;j++) {          // We calculate the sum of the digits of i'th number
            tempSum += Number(temp[j]);
        }

        if (count[tempSum]) {                         // WE keep track of the frequencies of unique sums
            count[tempSum] += 1;
        } else {
            count[tempSum] = 1;
        }
    }

    var temp = Object.values(count)[0];               // We chose a random value from the key-value pairs, so that we can use it in the for loop during conditional comparision

    for (let a of Object.values(count)) {             // Object.vales() returns an array of values while Object.keys() returns an array of keys in the passed object
        if (a > temp) {                               // we find the value of the highest frequency
            temp = a;
        }
    }

    for (let a of Object.values(count)) {
        if (a == temp) {                              // we count the number of times highest frequency appears in the 'count' object
            result++;
        }
    }

    return result;
}

main();



/* My idea was to run a for loop iterating from 1 to n, and for each of these values, we calculate the sum of their digits. We then populate the 'count' object
with the sums and their frequencies. After we have key-value pairs of sums and their frequencies, we find the highest frequency in 'count'. After doing that, we 
check how many times the highest frequency is repeated in the 'count' object. EZ I solved it on my own btw(i had to refer to stack overflow on how to iterate the values of an object tho) */

/* 
Alternative Method :-

In the previous method, we convert the number into a string and then add each string element to the 'tempSum' variable after converting each of those elements 
to Number datatype. In our alternative method, instead of converting the number into a string, we keep it as a Number, we then put it into a while loop and 
keep adding the unit's place digit to tempSum until the number is 0 or less than it.
*/