"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function minTime(points) {
    var minTime = 0;
    for (var i = 0; i < points.length - 1; i++) { // we stop at the second-to-last element of the array
        var p1X = points[i][0], p1Y = points[i][1], p2X = points[i + 1][0], p2Y = points[i + 1][1];
        var diffX = Math.abs(p2X - p1X); // order doesn't matter, since we're converting it to it's positive counterpart
        var diffY = Math.abs(p2Y - p1Y);
        while (diffX > 0 && diffY > 0) {
            diffX--;
            diffY--;
            minTime++;
        }
        while (diffX > 0) {
            diffX--;
            minTime++;
        }
        while (diffY > 0) {
            diffY--;
            minTime++;
        }
    }
    return minTime;
}
function main() {
    var size = Number(prompt("Enter the size of 'points' array : ")), points = [];
    for (var i = 0; i < size; i++) {
        var temp = [];
        for (var j = 0; j < 2; j++) {
            temp.push(Number(prompt("Enter the X and Y co-ordinates for ".concat(i + 1, "th element of `points` array : ")))); // forward slash (\) is used to make the compiler ignore the next character
        }
        points.push(temp);
    }
    var result = minTime(points);
    console.log("The minimum time required to visit all given points in order is : ".concat(result));
}
if (require.main === module) {
    main();
}
