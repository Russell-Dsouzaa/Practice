const prompt = require('prompt-sync')();

function main() {
    let s = prompt("Enter the girl's age : ");

    console.log(Number(s[0]));
}

if (require.main === module) {
    main();
}