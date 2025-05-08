const prompt = require('prompt-sync')();

function main () {
    do {
        var heads = Number(prompt("Enter the total number of heads : "));
        var legs = Number(prompt("Enter the total number of legs : "));
    } while (isNaN(heads) || isNaN(legs));

    // while(typeof(heads) !== 'number' || typeof(legs) !== 'number') doesnt work because Number() would always return a number or Nan(if we didnt enter a number),
    // So, if we entered a string(let's say) the loop would end as if it was successful(which it wasn't). There fore we check for isNan() instead

    console.log(headsAndLegs(heads,legs));
}

function headsAndLegs(heads,legs) {
    var Cows = Math.floor((legs / 2) - heads);
    var Chickens = Math.floor(heads - Cows);

    if (heads < 0 || legs < 0) {
        return "No solutions";
    } else if (2 * Chickens + 4 * Cows !== legs) {
        return "No solutions";
    } else {
        return [Chickens,Cows];
    }
}

main();