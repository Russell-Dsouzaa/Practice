const prompt = require('prompt-sync')();

/*
  formulae used : 
    NumChicken + NumCow = heads
    2(NumChicken) + 4(NumCow) = legs    -> which gets simplified to 2(NumChicken + 2(NumCow)) = legs  -> NumChicken + 2(NumCow) = legs / 2
    
    now we keep the common variable(NumChicken) on the LHS and move everything else on the RHS, so that we can equate the two equations
  
    Therefore, heads - NumCow = (legs / 2) - 2(NumCow)    -> NumCow = (legs / 2) - heads
    WE get the number of Cows, which we can then use to find the number of Chickens
*/

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
    var Cows = Math.floor((legs / 2) - heads);    // We use Math.floor, since sometimes the output of the calculation results in a floating point number
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