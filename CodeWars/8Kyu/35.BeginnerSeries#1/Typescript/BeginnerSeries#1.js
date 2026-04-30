"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function main() {
    var m = Number(prompt("Enter the number of classmates : ")), n = Number(prompt("Enter the number of pages in teh assignment : "));
    // we definitely have no need to abtract this part away in a function
    if (m < 0 || n < 0) {
        console.log("The total number of pages that lil bro would have to cover would be : 0");
    }
    else {
        console.log("The total number of pages that lil bro would have to cover would be : ".concat(m * n));
    }
}
if (require.main === module) {
    main();
}
