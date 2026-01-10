import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function stackOperations(target : number[], n : number) : string[] {
    var result : string[] = [];

    for (let i = 1;i <= n;i++) {
        result.push("Push");

        if (!target.includes(i)) {
            result.push("Pop");
        }

        if (check(i)) {  // checks whether the currect number/integer/value of 'n' is the last element in 'target' array or not
            break;
        }
    }

    function check(num : number) : boolean {
        return num === target[target.length - 1];
    }

    return result;
}

function main() : void {
    var target : number[] = [], n : number = Number(prompt("Enter the value of 'n' : ")), size : number = Number(prompt("Enter the size of the target array : "));

    for (let i = 0;i < size;i++) {
        target.push(Number(prompt(`Enter the ${i+1}th element of the target array : `)));
    }

    var result : string[] = stackOperations(target,n);
    console.log(result);  // yeak, ik, I could've called staackoperations() function directly within console.log()
}

main();