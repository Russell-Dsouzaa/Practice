import * as PromptSync from 'prompt-sync'
const prompt = PromptSync();

function main() {
    var num : number = Number(prompt("Enter an Integer : "));    // if we plan on to use the string method(refer to the javascript solution), we count remove the Number() typecast from this LOC
    var result : number= CLG(num);
    
    console.log(result);
}

function CLG(num : number) : number {
    if (num === 0) {
        return 0;
    }

    var map : {[key: number]: number}= {};
    var result : number = 0;

    for (let i = 1;i <= num;i++) {
        var tempSum : number = Sum(i);

        if (map[tempSum]) {
            map[tempSum] += 1;
        } else {
            map[tempSum] = 1;
        }
    }

    var highestCount = Math.max(...Object.values(map));  // We use the spread operator because Math.max() expects an multiple inputs. This is not to be 
    // confused with an array. eg:- Math.max([1,2,3,4]) INVALID, Math.max(1,2,3,4); VALID

    for (let i of Object.values(map)) {
        if (i === highestCount) {
            result++;
        }
    }

    /*
    we can use this for loop instead of the above one,
    for (let i of Object.keys(map)) {
        if (map[i] === highestCount) {
        result++;
        }
    } 
    */

    return result;
}

function Sum(num : number) : number {
    var result : number = 0;

    while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
    }

    return result;
}

main();