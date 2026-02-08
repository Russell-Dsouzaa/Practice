import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function explode(arr1 : (string | number)[]) : (string | number)[][] | string {
    let result : (string | number)[][] = [], score : number = 0;

    if (typeof(arr1[0]) === 'number' && typeof(arr1[1]) === 'number') {
        score = arr1[0] + arr1[1];
    } else if (typeof(arr1[0]) === 'number') {
        score = arr1[0];
    } else if (typeof(arr1[1]) === 'number') {
        score = arr1[1];
    } else {
        return "Void!";
    }

    for (let i = 0;i < score;i++) {
        result.push(arr1);
    }

    return result;
}

function main() : void {
    let arr : (string | number)[] = [];

    for (let i = 0;i < 2;i++) {
        arr[i] = prompt(`Enter the ${i + 1}th element of the array : `);
    }

    // we convert the strings representing numbers, into numbers
    arr = arr.map(elem => {
        let num = Number(elem);
        return Number.isNaN(num) ? elem : num;
    });

    console.log(explode(arr));
}

if (require.main === module) {
    main();
}