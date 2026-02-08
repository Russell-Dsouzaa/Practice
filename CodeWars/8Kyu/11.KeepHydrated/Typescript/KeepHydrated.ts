import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function litres(time : number) : number {
    return Math.floor(time / 2);  // time * 0/5 works as well;
}

function main() : void {
    let time : number = Number(prompt("Enter the time (in hours) : "));

    console.log(`The amount of water that Nathan drinks in ${time} hours is ${litres(time)} litres.`);
}

if (require.main === module) {
    main();
}