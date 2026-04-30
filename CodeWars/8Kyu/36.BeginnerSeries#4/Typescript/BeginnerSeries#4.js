"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function main() {
    var speed = Number(prompt("Enter the Cockroach's speed (in Km/Hr) : "));
    console.log("The Cockroach's speed in cm/hr is : ".concat(Math.floor(speed * (1000 / 36)))); // Initially, I had put .floor method on 10/36 which gave me an answer which had a decimal point (but it was close to the correct answer). Then I tried by putting the .floor method on `speed', but that too gave me a similar result
}
if (require.main === module) {
    main();
}
