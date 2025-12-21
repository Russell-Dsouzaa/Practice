import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function count(array1 : number[]) : number[] {
    var result : number[] = [];

    for (let i = 0;i < array1.length;i++) {
        let temp : number = 0;

        for (let j = 0;j < array1.length;j++) {
            if (array1[j] < array1[i]) {
                temp++;
            }
        }

        result.push(temp);
    }

    return result;
}

function main() : void {
    var arr1 : number[] = [], size : number = Number(prompt("Enter the size of the array : "));

    for (let i = 0;i < size;i++) {
        arr1.push(Number(prompt(`Enter the ${i}th element of the array : `)));
    }

    var result : number[] = count(arr1);
    console.log(result);
}

main();