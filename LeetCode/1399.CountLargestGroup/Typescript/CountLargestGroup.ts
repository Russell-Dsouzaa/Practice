import * as PromptSync from 'prompt-sync'
const prompt = PromptSync();

function main() {
    var num = Number(prompt("Enter an Integer : "));    // if we plan on to use the string method(refer to the javascript solution), we count remove the Number() typecast from this LOC
    var result = CLG(num);
    
    console.log(result);
}

function CLG(num) {
    if (num === 0) {
        return 0;
    }

    var map : {[key: number]: number}= {};
    var result = 0;

    for (let i = 1;i <= num;i++) {
        var tempSum = Sum(i);

        if (map[tempSum]) {
            map[tempSum] += 1;
        } else {
            map[tempSum] = 1;
        }
    }

    var highestCount = Math.max(...Object.values(map));

    for (let i of Object.keys(map)) {
        if (map[i] === highestCount) {
            result++;
        }
    }

    return result;
}

function Sum(num) {
    var result = 0;

    while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
    }

    return result;
}

main();