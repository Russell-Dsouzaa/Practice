const prompt = require('prompt-sync')();

function convertNumber(var1) {
    // return String(var1);

    return var1 + '';
}

function main() {
    let result = convertNumber(Number(prompt("Enter an Integer : ")));
    console.log(`Datatype of ${result} is ${typeof(result)}`);
}

if (require.main === module) {
    main();
}