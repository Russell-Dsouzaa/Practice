import * as PromptSync from 'prompt-sync'

// const prompt = require('prompt-sync')();  
const prompt = PromptSync();    // both of these work the same

function main() {
    var s : String = prompt("Enter your name : ");

    var result : String = PlaysBanjo(s);
    console.log(result);
}

function PlaysBanjo(name : String) : String {
    if (name[0].toLowerCase() == 'r') {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}

main();