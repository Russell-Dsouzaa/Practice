import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function STA(arr1 : number[]) : number[] {
// assuming that we don't have to mutate and return the same array (i.e. arr1)
    
    var result = [], ptr1 = 0, ptr2 = Math.floor(arr1.length/2);  
    var n = ptr2;    // we do this so that we could use this variable later on in the definition of the for loop. Initially, we had used ptr2 in-place of 'n' in the for loop, which lead to an infinite loop :(
    
    for (let i = 0;i < n;i++) {
        result.push(arr1[ptr1++]);
        result.push(arr1[ptr2++]);
    }
    
    return result;
}

function main() : void {
    var size : number = Number(prompt("Enter the size of the array : ")), arr1 : number[] = [];

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result : number[] = STA(arr1);
    console.log(result);
}

main();