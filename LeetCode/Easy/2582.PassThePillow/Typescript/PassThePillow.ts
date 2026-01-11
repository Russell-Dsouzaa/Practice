import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function passThePillow(n : number, time : number) : number {
    var i = 1, direction = -1;

    while (time > 0) {
        if (i === 1) {
            direction = 1;
        } else if (i === n) {
            direction = -1;
        }

        i += direction;

        time--;
    }

    return i;
}

function main() : void {
    var n : number = Number(prompt("Enter the number of people who are standing next to each other : ")), time : number = Number(prompt("Enter the amount of time(in seconds) : "));

    var index : number = passThePillow(n, time);
    console.log(`The index of the person who would hold the pillow when the time hits 0 is : ${index}`);
}

main();