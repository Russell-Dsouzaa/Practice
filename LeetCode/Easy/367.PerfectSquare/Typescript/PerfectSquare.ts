import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function perfectSquare(num : number) : boolean {
    for (let i = 0;i * i <= num;i++) {  // make sure to put '<=' instead of just '<', otherwise the loop might not execute for the condition when i * i == num
        if (i * i === num) {
            return true;  // if incase, we would want also want to know the square root of 'num', we could just return 'i'
        }
    }

    return false;
}

function main() : void {
    var num : number = Number(prompt("Enter an Integer : "));

    var result : boolean = perfectSquare(num);
    if (result) {
        console.log(`${num} is a perfect square :)`);
    } else {
        console.log(`${num} is not a perfect square :(`);
    }
}

main();

/*
Learnings :-

    1. At LOC 6, if incase, we would want also want to know the square root of 'num', we could just return 'i'
    2. At LOC 4, make sure to put '<=' instead of just '<', otherwise the loop might not execute for the condition when i * i == num
*/