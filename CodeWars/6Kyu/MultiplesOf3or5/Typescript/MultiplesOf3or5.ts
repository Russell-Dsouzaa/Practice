import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function solution(num1 : number) : number {
    if (num1 < 0) {
        return 0;
    }

    var result = 0;

    for (let i = 1;i < num1;i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }

    return result;
}

function main() : void {
    let num1 : number = Number(prompt("Enter an Integer : "));

    var result : number = solution(num1);
    console.log(`The sum of all integers between 0 and ${num1}(non-inclusive) which are divisible by 3 and/or 5 is : ${result}`);
}

if (require.main === module) {
    main();
}