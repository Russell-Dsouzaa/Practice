import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function GIG(arr1 : number[]) : number {
    let map : {[key : string] : number} = {
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0,
        6 : 0,
    }, result : number = 0;

    for (let i of arr1) {
        if (i in map) {
            map[i] += 1;
        }
    }

    for (let i of Object.keys(map)) {
        if (i === '1') {
            if (map[i] > 2) {
                let divisible : number = Math.floor(map[i] / 3), temp : number = map[i] % 3;

                result += (divisible * 1000) + (temp * 100);
            } else {
                result += map[i] * 100;
            }
        } else if (i === '5') {
            if (map[i] > 2) {
                let divisible : number = Math.floor(map[i] / 3), temp : number = map[i] % 3;

                result += (divisible * 500) + (temp * 50);
            } else {
                result += map[i] * 50;
            }
        } else if (i === '6') {
            if (map[i] > 2) {
                result += Math.floor(map[i] / 3) * 600;
            }
        } else if (i === '4') {
            if (map[i] > 2) {
                result += Math.floor(map[i] / 3) * 400;
            }
        } else if (i === '3') {
            if (map[i] > 2) {
                result += Math.floor(map[i] / 3) * 300;
            }
        } else if (i === '2') {
            if (map[i] > 2) {
                result += Math.floor(map[i] / 3) * 200;
            }
        }
    }

    return result;
}

function main() : void {
    let arr1 : number[] = [];

    for (let i = 0;i < 5;i++) {
        arr1.push(Number(prompt(`Enter an Integer between 1 and 6 (inclusive) : `)));
    }

    let result : number = GIG(arr1);
    console.log(`The score : ${result}`);
}

if (require.main === module) {
    main();
}