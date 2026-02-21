import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function diff(arr1 : number[],arr2 : number[]) : number[] {
    // for (let i = 0;i < arr1.length;i++) {
    //     if (arr2.includes(arr1[i])) {
    //         arr1.splice(i,1);
    //     }
    // }

    // return arr1;    this doesn't work as expected for some testcases([1,2,2,2,3], [2]) since we're modifying the array which we're traversing in the loop

    // we solve this by traversing the array from right-to-left instead of left-to-right
    for (let i = arr1.length - 1;i > 0;i--) {
        if (arr2.includes(arr1[i])) {
            arr1.splice(i,1);
        }
    }

    return arr1;
}

function main() : void {
    let size1 : number = Number(prompt("Enter the size of the first array : ")), size2 : number = Number(prompt("Enter the size of the second array : ")), arr1 : number[] = [], arr2 : number[] = [];

    for (let i : number = 0;i < size1;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the first array : `)));
    }

    for (let i : number = 0;i < size2;i++) {
        arr2.push(Number(prompt(`Enter the ${i + 1}th element of the second array : `)));
    }

    console.log(`First array : ${arr1} \n Second array : ${arr2} \n Resulting first array : ${diff(arr1,arr2)}`);
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. 'in' operator only checks for keys/properties in objects(maps/dictionaries(key-value paris)/sets/arrays). In key-value pairs, 'in' only checks the 
    presence of 'keys' in the object. In arrays, 'in' only checks whether that index exists or not. 

    For example :- temp = ["100", 200, "cedar"];  
    `200 in temp` would return false.  `1 in temp` would return true. `"length" in temp` would return true (since arrays have .length property)

    So, in other words, we cannot use `arr[i] in arr2` at LOC 6
*/