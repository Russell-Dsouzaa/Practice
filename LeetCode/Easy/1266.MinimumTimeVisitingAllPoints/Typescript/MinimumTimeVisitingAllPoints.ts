import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function minTime(points : number[][]) : number {
    let minTime : number = 0;

    for (let i = 0;i < points.length - 1;i++) {   // we stop at the second-to-last element of the array
        let p1X : number = points[i][0], p1Y : number = points[i][1], p2X : number = points[i + 1][0], p2Y : number = points[i + 1][1];

        let diffX : number = Math.abs(p2X - p1X);  // order doesn't matter, since we're converting it to it's positive counterpart
        let diffY : number = Math.abs(p2Y - p1Y);

        while (diffX > 0 && diffY > 0) {
            diffX--;
            diffY--;

            minTime++;
        }

        while (diffX > 0) {
            diffX--;
            minTime++;
        }

        while (diffY > 0) {
            diffY--;
            minTime++;
        }
    }

    return minTime;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of 'points' array : ")), points : number[][] = [];

    for (let i = 0;i < size;i++) {
        let temp : number[] = [];

        for (let j = 0;j < 2;j++) {
            temp.push(Number(prompt(`Enter the X and Y co-ordinates for ${i + 1}th element of \`points\` array : `)));  // forward slash (\) is used to make the compiler ignore the next character
        }

        points.push(temp);
    }

    var result : number = minTime(points);
    console.log(`The minimum time required to visit all given points in order is : ${result}`);
}

if (require.main === module) {
    main();
}