const prompt = require('prompt-sync')();

function main() {
    var length = Number(prompt("Enter the length of the Box : "));
    var breadth = Number(prompt("Enter the breadth of the Box : "));
    var height = Number(prompt("Enter the height of the Box : "));

    console.log(SAandV(length,breadth,height));  // SA and V stands for Surface Area and Volume instead of Sexual Assault and Violence
}

function SAandV(length,breadth,height) {
    return [2 * ((length * breadth) + (breadth * height) + (length * height)),length * breadth * height];
}

main();