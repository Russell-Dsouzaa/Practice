import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function singleNumber(arr : number[]) : number {
    let map : {[key : string] : number} = {};

    for (let i of arr) {
        if (i in map) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }

    for (let i of Object.keys(map)) {
        if (map[i] < 2) {
            return Number(i);
        }
    }

    return -1;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), arr : number[] = [];

    for (let i = 0;i < size;i++) {
        arr.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The element which appears only once is : ${singleNumber(arr)}`);
}

if (require.main === module) {
    main();
}