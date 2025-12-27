import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});  // yeah, ik, there was no need to explicitly epecify the type of this variable as 'any'

function minCost(str : string, costArray : number[]) : number {
    var map : {[key : string] : number} = {}, result = 0;

    for (let i = 0;i < str.length;i++) {
        if (map[str[i]]) {
            map[str[i]] += costArray[i];
        } else {
            map[str[i]] = costArray[i];
        }
    }

    var largestValueInTheObject : number = Math.max(...Object.values(map));
    var indexOfLargestValue : number = Object.values(map).indexOf(largestValueInTheObject);

    var keys : string[] = Object.keys(map);
    var charWithLargestValue : string = keys[indexOfLargestValue];

    for (let key in map) {
        if (key !== charWithLargestValue) {
            result += map[key];
        }
    }

    return result;
}

function main () {
    var string : string = prompt("Enter a string "), costArray : number[] = [];

    do {
        var sizeCostArray : number = Number(prompt("Enter the size of the cost array(It must equal the length of the string) : "));
    } while (sizeCostArray !== string.length);

    for (let i = 0;i < sizeCostArray;i++) {
        costArray.push(Number(prompt(`Enter the ${i}th element w.r.t. the string : `)));
    }

    var result : number = minCost(string, costArray);
    console.log(`The minimum cost : ${result}`);
}

main();