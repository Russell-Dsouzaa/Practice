import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function twoSum(arr : number[],tar : number) : number[] {
    let map : {[key : number] : number} = {};

    for (let i : number = 0;i < arr.length;i++) {
        if ((tar - arr[i]) in map) { 
            return [map[tar - arr[i]],i];
        }

        map[arr[i]] = i;
    }

    return [-1,-1];
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), arr1 : number[] = [], target : number = Number(prompt("Enter the target element : "));

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The indices of array elements which add up to ${target} are : ${twoSum(arr1,target)}`);
}

if (require.main === module) {
    main();
}