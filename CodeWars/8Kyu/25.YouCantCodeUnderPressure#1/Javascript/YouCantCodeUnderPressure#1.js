const prompt = require('prompt-sync')();

function double (num) {
    return num * 2;
}

function main() {
    let num = Number(prompt("Enter an integer : "));

    console.log(`The double of the entered Integer : ${double(num)}`);
}

if (require.main === module) {
    main();
}