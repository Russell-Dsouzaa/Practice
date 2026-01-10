import * as PromptSync from 'prompt-sync'
const prompt = PromptSync();

function main() {
    var size : number = Number(prompt("Enter the size of the array : ")), array1 : string[] = [];

    for (let i : number = 0;i < size;i++) {
        array1[i] = prompt(`Enter the ${i + 1}th element of the array : `);
    }

    var result : string = LCP(array1);

    console.log(result);
}

function LCP(array1 : string[]) {
    var shortestLength : number = Math.min(...array1.map(str => str.length)),j = 0;

    for (let i : number = 0;i < shortestLength;i++) {
        for (let str of array1) {
            if (array1[0][j] !== str[j]) {
                return array1[0].substring(0,j);
            }

            j++;
        }
    }

    return array1[0].substring(0,j);
}

main();