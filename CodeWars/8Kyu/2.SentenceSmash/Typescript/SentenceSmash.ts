import * as PromptSync from 'prompt-sync'
const prompt = PromptSync();

function main() {
    var size : number = Number(prompt("Enter the size of the array : "));
    var words : string[] = [];

    for (let i = 0;i < size;i++) {
        let a : string = prompt(`Enter the ${i + 1}th element of the array : `);
        words.push(a);
    }

    var result : string = Smash(words);
    console.log(result);
}

function Smash(words : string[]) {
    var result : string = "";

    for (let i of words) {
        result = result + " " + i;
    }

    return result;
}

main();