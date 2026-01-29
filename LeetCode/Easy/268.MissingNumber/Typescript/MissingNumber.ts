import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function missingNum(nums : number[]) : number {
    let sumOfNNaturalNumbers : number = (nums.length * (nums.length + 1)) / 2, runningSum : number = 0;

    for (let i of nums) {
        runningSum += i;
    }

    return sumOfNNaturalNumbers - runningSum;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), array1 : number[] = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array(start from 0, we assume some input arrays can contain 0) : `)));
    }

    var result : number = missingNum(array1);
    console.log(`The missing number is ${result}, while the size of the supposed array is ${size + 1}`);
}

main();