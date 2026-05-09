"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function uniqueInOrder(str) {
    var result = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        if (result[result.length - 1] !== i) {
            result.push(i);
        }
    }
    return result;
}
function main() {
    var str = prompt("Enter an input in the sorm of a String : ");
    console.log("The resulting array is : ".concat(uniqueInOrder(str)));
}
if (require.main === module) {
    main();
}
// Note :- In the problem's description, it is given that the input could be a string or an array of numbers. In our implementation, we've only accounted for string inputs. So, for now if you 
// wish to test numeric array inputs, just pass them as a string input (without any whitespaces)
