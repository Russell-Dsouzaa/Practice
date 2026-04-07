import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sig : true});

function clock(h,m,s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}

function main() {
    let h : number = 0, m : number = 0, s : number = 0;

    h = Number(prompt("Enter the number of hours : "));
    m = Number(prompt("Enter the number of minutes : "));
    s = Number(prompt("Enter the number of seconds : "));

    console.log(`${h} hours ${m} minutes ${s} seconds equals to ${clock(h,m,s)} milliseconds`);
}

if (require.main === module) {
    main();
}