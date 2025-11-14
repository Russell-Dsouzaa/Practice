import * as PromptSync from 'prompt-sync';
const prompt = PromptSync({sigint : true});

function isValid(str : string) : boolean {
    if (str.length % 2 !== 0) {
        return false;
    } else if (str[0] === ')' || str[0] === ']' || str[0] === '}') {
        return false;
    }

    var stack : string[] = [];

    for (let i of str) {
        if (i === '(' || i === '[' || i === '{') {
            stack.push(i);
        } else {
            if (i === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            } else if (i === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            } else if (i === '}' && stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
}

function main() : void {
    var str : string = prompt("Enter a string : ");

    var result : boolean = isValid(str);
    console.log(result);
}

main();

/*
Learnings :-
    1. At LOC 13, I tried type annotating the variable 'i'. Apparently, we cannot use type annotations in for..of loop (not sure whether we could type-annotate in for...in loop)
*/