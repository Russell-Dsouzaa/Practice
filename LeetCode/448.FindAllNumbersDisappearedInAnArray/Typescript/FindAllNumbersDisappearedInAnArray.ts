import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function DisappearedNumbers(array1 : number[]) : number[]  {
    for (let i of array1) {
        if (array1[Math.abs(i) - 1] > 0) {
            array1[Math.abs(i) - 1] = -array1[Math.abs(i) - 1]
        }
    }

    var result : number[] = [];

    for (let i = 0;i < array1.length;i++) {
        if (array1[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}

function main() {
    var array1 : number[] = [], size : number = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the #${i + 1}th element of the arrayb : `)));
    }

    var result : number[] = DisappearedNumbers(array1);
    console.log(result);
}

main();