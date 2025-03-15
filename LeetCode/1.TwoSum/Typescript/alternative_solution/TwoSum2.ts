import * as PromptSync from 'prompt-sync'

const prompt = PromptSync();

function main() : void {
    var size : number = Number(prompt("Enter the size of the array : "));
    const array1 : number[] = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var target : number = Number(prompt("Enter the target element : "));

    var result : number[] | null = TwoSum(array1,target);

    if (result == null) {
        console.log(`No two array elements add up to ${target}`);
    } else {
        console.log(`Indices of the two array elements which add up to ${target} are : ${result[0] + 1} and ${result[1] + 1}`);
    }
}

function TwoSum(arr1 : number[],target : number) {
    const map : {[index:number] : number} = {};    // we use index keyword to generalize the types of key-value pairs in js objects. Usually, we define types for each key of the object manually one by one.

    for (let i = 0;i < arr1.length;i++) {
        let complement = target - arr1[i];

        if (map[complement]) {
            return [map[complement],i];
        } else {
            map[arr1[i]] = i;
        }
    }

    return null;
}

main();