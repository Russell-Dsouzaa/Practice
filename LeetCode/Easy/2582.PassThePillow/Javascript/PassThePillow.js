const prompt = require('prompt-sync')();

function passThePillow(n, time) {
    let i = 1, direction = -1;
    
    while (time > 0) {
        if (i === 1) {
            direction = 1;
        } else if (i === n) {
            direction = -1;
        }

        i += direction;

        time--;
    }

    return i;
}

function main() {
    var n = Number(prompt("Enter the number of people who are standing next to each other : ")), time = Number(prompt("Enter the amount of time(in seconds) : "));

    console.log(`The index(1-indexed) of the person who would end up holding the pillow after time hits 0 is : ${passThePillow(n,time)}`);
}

main();