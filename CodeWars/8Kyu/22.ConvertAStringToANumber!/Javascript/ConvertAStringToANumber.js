const prompt = require('prompt-sync')();

function main() {
    let str = prompt("Enter a number(it will be stored as a string) : ");

    // console.log(Number(str));  method 1
    console.log(+ str);
}

if (require.main === module) {
    main();
}