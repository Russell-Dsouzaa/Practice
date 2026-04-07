const prompt = require('prompt-sync')();

function clock(h,m,s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}

function main() {
    let h = 0, m = 0, s = 0;

    h = Number(prompt("Enter the number of hours : "));
    m = Number(prompt("Enter the number of minutes : "));
    s = Number(prompt("Enter the number of seconds : "));

    console.log(`${h}, ${m} and ${s} in milliseconds is : ${clock(h,m,s)}`);
}

if (require.main === module) {
    main();
}