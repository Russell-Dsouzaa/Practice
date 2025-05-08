import * as PromptSync from 'prompt-sync';
const prompt = PromptSync();

function main() : void {
    var heads : number = Number((prompt("Enter the total number of heads : ")));;
    var legs : number = Number(prompt("Enter the total number of legs : "));

    var result : number[] | string = headsAndLegs(heads,legs);
    console.log(result);
}

function headsAndLegs(heads : number,legs : number) : number[] | string {
    var Cows : number = Math.floor((legs / 2) - heads);
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