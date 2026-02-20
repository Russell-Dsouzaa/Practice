import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});
// const runningSum : any = require('../../../Easy/1480.RunningSum/Typescript/RunningSum.ts');
import runningSum from '../../../Easy/1480.RunningSum/Typescript/RunningSum';

function maximumSplit(arr1 : number[]) : number {
    let max : number = -Infinity, prefixSum : number[] = runningSum([...arr1]), suffixMin : number[] = new Array(arr1.length);  // when we pass an array to a function, it is passed by reference (i.e. the original array is passed)

    suffixMin[arr1.length - 1] = Infinity;  // this is because there aren't any elements after the very last element, so we cannot calculate minSuffix for the very last element of 'nums' array
    for (let i = arr1.length - 2;i >= 0;i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1],arr1[i + 1]);
    }

    for (let i = 0;i < arr1.length - 1;i++) {
        let temp = prefixSum[i] - suffixMin[i];

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), array1 : number[] = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The maximum split is : ${maximumSplit(array1)}`);
}

if (require.main === module) {
    main();
}