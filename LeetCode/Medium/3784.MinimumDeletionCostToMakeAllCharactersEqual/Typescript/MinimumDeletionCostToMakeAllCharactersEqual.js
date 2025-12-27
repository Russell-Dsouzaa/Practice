"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true }); // yeah, ik, there was no need to explicitly epecify the type of this variable as 'any'
function minCost(str, costArray) {
    var map = {}, result = 0;
    for (var i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            map[str[i]] += costArray[i];
        }
        else {
            map[str[i]] = costArray[i];
        }
    }
    var largestValueInTheObject = Math.max.apply(Math, Object.values(map));
    var indexOfLargestValue = Object.values(map).indexOf(largestValueInTheObject);
    var keys = Object.keys(map);
    var charWithLargestValue = keys[indexOfLargestValue];
    for (var key in map) {
        if (key !== charWithLargestValue) {
            result += map[key];
        }
    }
    return result;
}
function main() {
    var string = prompt("Enter a string "), costArray = [];
    do {
        var sizeCostArray = Number(prompt("Enter the size of the cost array(It must equal the length of the string) : "));
    } while (sizeCostArray !== string.length);
    for (var i = 0; i < sizeCostArray; i++) {
        costArray.push(Number(prompt("Enter the ".concat(i, "th element w.r.t. the string : "))));
    }
    var result = minCost(string, costArray);
    console.log("The minimum cost : ".concat(result));
}
main();
