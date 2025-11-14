const prompt = require('prompt-sync')();

function isValid(str) {
    if (!(str.length % 2 === 0)) {  // not sure whether an empty string should return true/false. But, anyways, in constraints, it says that the str.length would atleast be 1
        return false;
    } else if (str[0] === '}' || str[0] === ']' || str[0] === ')') {
        return false;
    }

    var stack = [];

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

    // if (!stack) {            this in incorrect, for two reasons, refer to point 2. in 'Learnings'
    //     return true;
    // } else {
    //     return false;
    // }

    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
}

function main() {
    var str = prompt("Enter the string : ");

    console.log(isValid(str));
}

main();

/*
Learnings :-
    1. Apparently, we can't index into arrays with index value of negative one(-1). It's an exclusive Python thing. So, in order to access the last element of a stack(array), we use ' arr1[arr1.length - 1]; 'instead
    2. At LOC 30, 
        First, we need to check whether the stack is empty or not. Hence, we should compare it's length with 0 instead of checking whether it's null
        Second, !arr1 an arr1 in a conditional statement always return true, since an array is a truthy value
*/