import * as PromptSync from 'prompt-sync';
const prompt = PromptSync();

/*
  formulae used : 
    NumChicken + NumCow = heads
    2(NumChicken) + 4(NumCow) = legs    -> which gets simplified to 2(NumChicken + 2(NumCow)) = legs  -> NumChicken + 2(NumCow) = legs / 2
    
    now we keep the common variable(NumChicken) on the LHS and move everything else on the RHS, so that we can equate the two equations
  
    Therefore, heads - NumCow = (legs / 2) - 2(NumCow)    -> NumCow = (legs / 2) - heads
    WE get the number of Cows, which we can then use to find the number of Chickens
*/

function main() : void {
    var heads : number = Number((prompt("Enter the total number of heads : ")));;
    var legs : number = Number(prompt("Enter the total number of legs : "));

    var result : number[] | string = headsAndLegs(heads,legs);
    console.log(result);
}

function headsAndLegs(heads : number,legs : number) : number[] | string {
    var Cows : number = Math.floor((legs / 2) - heads);    // We use Math.floor, since sometimes the output of the calculation results in a floating point number
    var Chickens : number = Math.floor(heads - Cows);

    if (heads < 0 || legs < 0) {
        return "No solutions";
    } else if (2 * Chickens + 4 * Cows !== legs) {
        return "No solutions";
    } else {
        return [Chickens,Cows];
    }
}

main();