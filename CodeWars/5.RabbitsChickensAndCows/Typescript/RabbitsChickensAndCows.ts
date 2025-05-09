import * as PromptSync from 'prompt-sync';
const prompt = PromptSync();

function main() : void {
    do {
        var heads : number = Number(prompt("Enter the total number of heads : "));
        var legs : number = Number(prompt("Enter the total number of legs : "));
        var horns : number = Number(prompt("Enter the total number of horns : "));
    } while (isNaN(heads) || isNaN(legs) || isNaN(horns));  // if press enter without providing an input, tsc considers it as '0' and this condition gets satisfied

    var result : {[key : string] : number} = RCandC(heads,legs,horns);
    console.log(`Rabbits : ${result["Rabbits"]}, Chickens : ${result["Chickens"]} and Cows : ${result["Cows"]}`);
}

function RCandC(heads : number,legs : number,horns : number) : {[key : string] : number} {
    if (heads < 0 || legs < 0) {    // we do not check the number of horns, because even if the number of horns is less than 0, it would only affect the number of Cows, the number of Rabbits and Chickens would remain unaffected
        return {"Cows" : 0,"Chickens" : 0,"Rabbits" : 0};
    }
    
    var Cows : number = Math.floor(horns / 2);    // assuming that the number of horns is an Odd number
    heads = heads - Cows;
    legs = legs - Cows * 4;

    var Rabbits : number = Math.floor((legs / 2) - heads);
    var Chickens : number = Math.floor(heads - Rabbits);

    heads = heads + Cows;
    legs = legs + 4 * Cows;

    if ((Cows + Rabbits + Chickens) !== heads || (Cows * 4 + Rabbits * 4 + Chickens * 2) !== legs) {
        return {"Cows" : 0,"Rabbits" : 0,"Chickens" : 0};
    } else {
        return {"Cows" : Cows,"Rabbits" : Rabbits,"Chickens" : Chickens};
    }
}

main();