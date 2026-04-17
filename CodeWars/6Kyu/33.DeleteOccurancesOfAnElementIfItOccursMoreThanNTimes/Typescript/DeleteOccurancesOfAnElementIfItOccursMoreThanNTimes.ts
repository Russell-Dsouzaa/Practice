import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function DEL(arr1 : number[] ,n : number) : number[] {
    let removals : number[] = [], map : {[key : string] : number} = {}, result : number[] = [];

    for (let i of arr1) {
        if (i in map) {
            map[i] += 1;
        } else {
            map[i] = 1;
        }

        if (map[i] > n) {
            removals.push(i);
        }
        
        if (removals.includes(i)) {
            continue;
        } else {
            result.push(i);
        }
    }

    return result;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), arr1 : number[] = [], N : number = Number(prompt("Enter the value of 'N' : "));

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`Modified array : ${DEL(arr1,N)}`);
}

if (require.main === module) {
    main();
}