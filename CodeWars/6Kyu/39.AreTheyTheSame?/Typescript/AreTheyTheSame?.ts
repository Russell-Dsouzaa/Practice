import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function com(arr1 : number[], arr2 : number[]) : boolean {
    if (arr1 === null || arr2 === null) {
        return false;
    } else if (arr1.length !== arr2.length) {
        return false;
    } else if (arr1.length < 1 || arr2.length < 1) {
        return true;    // we put this here to satisfy that one case on CodeWars (arr1 = [] and arr2 = []). I know, this is a bit different case than the conditional. We check whether any ONE of them's empty, while the testcase sends arguments where BOTH inputs are empty.
    }

    let dict1 : {[key : number] : number} = {}, dict2 : {[key : number] : number} = {};

    for (let i = 0;i < arr1.length;i++) {
        if (arr1[i] in dict1) {
            dict1[arr1[i]] += 1;
        } else {
            dict1[arr1[i]] = 1;
        }

        if (arr2[i] in dict2) {
            dict2[arr2[i]] += 1;
        } else {
            dict2[arr2[i]] = 1;
        }
    }

    for (let i of Object.keys(dict1)) {
        let num = Number(i);    // The reason we do this, is because 'Object.Keys' return a string array by default (string[]). Hence, 'i' is inferred as a string instead of a number, and tsc raises an error. To overome this, we wrote this extra LOC. Another problem we faced, is that for some reason I couldn't reassign 'i' variable's value back to i. So we had to create a new variable and use it then onwards.

        if (dict2[num * num] !== dict1[num]) {
            return false;
        }
    }

    return true;
}

function main() : void {
    let arr1 : number[] = [], arr2 : number[] = [], size1 : number = Number(prompt("Enter the size of the first array : ")), size2 : number = Number(prompt("Enter the size of the second array : "));

    for (let i = 0;i < size1;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the first array : `)));
    }

    for (let i = 0;i < size2;i++) {
        arr2.push(Number(prompt(`Enter the ${i + 1}th element of the second array : `)));
    }

    if (com(arr1,arr2)) {
        console.log(`${arr1} and ${arr2} are equal :)`);
    } else {
        console.log(`${arr1} and ${arr2} are not equal it seems :(`);
    }
}

if (require.main === module) {
    main();
}


/*
Learnings :-

    1. At LOC 32, tsc raised an error saying that 'i' has to be a number. That is because 'Object.Keys' return a string array by default (string[]). Hence, 'i' is 
    inferred as a string instead of a number, and tsc raises an error. To overome this, we wrote this extra LOC. Another problem we faced, is that for some reason I couldn't 
    reassign 'i' variable's value back to i. So we had to create a new variable and use it then onwards.
*/