const prompt = require('prompt-sync')();

function litres(time) {
    return Math.floor(time / 2);  // time * 0/5 works as well;
}

function main() {
    let time = Number(prompt("Enter the time (in hours) : "));

    console.log(`The amount of water that Nathan drinks in ${time} hours is ${litres(time)} litres.`);
}

if (require.main === module) {
    main();
}