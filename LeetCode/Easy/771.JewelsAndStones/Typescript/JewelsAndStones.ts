import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function count(jewels : string,stones : string) : number {
    let set1 : Set<string> = new Set(), count : number = 0;;

    for (let i of jewels) {
        set1.add(i);
    }

    for (let i of stones) {
        if (set1.has(i)) {
            count++;
        }
    }

// alternative solution
    // for (let i of stones) {
    //     if (jewels.includes(i)) {
    //         count++;
    //     }
    // }

    return count;
}

function main() {
    let jewels : string = prompt("Enter the characters which represent jewels(in one single string) : "), stones : string = prompt("Enter the characters which represent stones(in one single string) : ");

    var result : number = count(jewels,stones);
    console.log(`The number of jewels in stones are : ${result}`);
}

main();