const prompt = require('prompt-sync')();

function main() {
    do {
        var heads = Number(prompt("Enter the total number of heads : ")), legs = Number(prompt("Enter the total number of legs : ")), horns = Number(prompt("Enter the total number of horns : "));
    } while (isNaN(heads) || isNaN(legs) || isNaN(horns));

    var result = RCandC(heads,legs,horns);
    console.log(`Cows : ${result["cows"]},Rabbits : ${result["rabbits"]} and Chickens : ${result["chickens"]}`);
}

function RCandC(heads,legs,horns) {
    if (heads < 0 || legs < 0) {
        return {cows : 0,rabbits : 0,chickens : 0};
    }

    var Cows = Math.floor(horns / 2);   // assuming that the number of horns is an Odd number
    heads = heads - Cows;
    legs = legs - Cows * 4;

    var Rabbits = Math.floor((legs / 2) - heads);    // assuming that the number of legs is an Odd number
    var Chickens = Math.floor(heads - Rabbits);

    heads = heads + Cows;
    legs = legs + Cows * 4;

    if (((Cows + Rabbits + Chickens) !== heads) || (4 * Cows + 4 * Rabbits + 2 * Chickens) !== legs) {
        return {"cows" : 0,"rabbits" : 0,"chickens" : 0};   // quotation marks or not, doesn't make a difference
    } else {
        return {cows : Cows,rabbits : Rabbits,chickens : Chickens};
    }
}

main();