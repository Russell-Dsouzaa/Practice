const prompt = require('prompt-sync')();

function minCost(str, costArray) {
    var map = {}, result = 0;

    for (let i = 0;i < str.length;i++) {
        if (str[i] in map) {  // we could also, instead use if (map[str[i]]) {}
            map[str[i]] += costArray[i];
        } else {
            map[str[i]] = costArray[i];
        }
    }

    var largestValueInTheObject = Math.max(...Object.values(map));  // we need to use the spread operator(...) here, since Math.Max() function expects multiple values but not at one time, but one-by-one
    var indexOfLargestValue = Object.values(map).indexOf(largestValueInTheObject);

    var keys = Object.keys(map);
    var charWithLargestCost = keys[indexOfLargestValue];

    for (let key in map) {  // for in, when applied to an object, returns a list of keys
        if (key !== charWithLargestCost) {
            result += map[key];
        }
    }

    return result;
}

function main() {
    var string = prompt("Enter a string consisting of lowercase english letters : "), costArray = [];
    
    do {
        var sizeCostArray = Number(prompt("Enter the size of the cost array(Size of the array must equal the length of the string) : "));
    } while (sizeCostArray !== string.length);

    for (let i = 0;i < sizeCostArray;i++) {
        costArray.push(Number(prompt(`Enter the cost of each character w.r.t. to the string entered earlier : `)));
    }

    var result = minCost(string, costArray);
    console.log(`Minimum cost to make all characters equal in the given stirng is : ${result}`);
}

main();

/*
Learnings :-

1. In the do-while loop, 'return' keyword return the function call/control to the caller function 'main()', which in turn ends the program since it's at the very bottom of the file. (I removed it)

2. 'in' keyword is present in JS just and works exactly as it does in Python. It is use to check the presence of values in arrays and objects(and strings as well ig, not sure though).
Example :- if (i in obj1), if (i in array1)

3. Initially, we forgot to declare the variable 'sizeCostArray' using either var, let or const (i.e. we forgot to put the keyword var, let or const before the variable name). But, even
    then, the program executed as expected. but what you’re seeing is a classic (and often discouraged) behavior of JavaScript called Implicit Globals.

    Here is why your code worked and what happened behind the scenes.

    1. The Creation of an Implicit Global
    In JavaScript, when you assign a value to a name that hasn't been declared (like sizeCostArray = ...), the engine doesn't immediately throw an error. Instead, it follows a specific lookup process:

    It checks the local scope (inside main()) for a declaration.

    It moves up to the outer scopes.

    When it reaches the Global Scope and still hasn't found a declaration, it creates the variable there for you.

    So, sizeCostArray essentially became a property of the global object (which is global in Node.js or window in a browser).

    2. Why this is generally avoided
    While the code "works," relying on implicit globals is considered bad practice for a few reasons:

    Pollution: You are adding variables to the global space, which can lead to naming collisions with other scripts or libraries.

    Memory Leaks: Global variables stay in memory for the entire life of the application.

    Confusion: It makes debugging harder because it’s not immediately clear where the variable originated.

    How to Prevent This: "Strict Mode"
    Modern JavaScript introduced Strict Mode to stop this behavior. If you add "use strict"; to the top of your file, your current code will throw a ReferenceError: sizeCostArray is not defined.
*/