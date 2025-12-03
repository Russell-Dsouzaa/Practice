import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function maxConsecutiveOnes(arr1 : number[]) : number {
    var i : number = 0, globalCount : number = 0;

    while (i < arr1.length) {
        var localCount : number  = 0;

        if (arr1[i] === 1) {
            while (arr1[i] === 1) {
                localCount++;
                i++;
            }
        } else {
            while (i < arr1.length && arr1[i] === 0) {
                i++;
            }
        }

        if (localCount > globalCount) {
            globalCount = localCount;
        }
    }

    return globalCount;
}

function main(): void {
    var arr1 : number[] = [], size : number = Number(prompt("Enter the size of the array : "));

    for (let i : number = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    var result : number = maxConsecutiveOnes(arr1);
    console.log(`The maximum number of consecutive ones in the given array is : ${result}`);
}

main();