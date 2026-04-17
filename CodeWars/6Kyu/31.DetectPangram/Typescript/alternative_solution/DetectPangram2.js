"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function isPangram(str) {
    var map = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    };
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        if (i in map) {
            map[i] += 1;
        }
        else {
            map[i] = 1;
        }
    }
    for (var _a = 0, _b = Object.keys(map); _a < _b.length; _a++) {
        var i = _b[_a];
        if (map[i] < 1) {
            return false;
        }
    }
    return true;
}
function main() {
    var str = prompt("Enter a string : ");
    if (isPangram(str)) {
        console.log("".concat(str, " is a Pangram :)"));
    }
    else {
        console.log("".concat(str, " is not a Pangram :("));
    }
}
if (require.main === module) {
    main();
}
/*
Learnings :-

    1. At LOC 33, we check whether a key is present in the object(key-value pair) 'map' using the 'in' operator. But the correct syntax to do
    that is : `if ("key" in obj)`. That is, we encase the key to be searched in double/single inverted commas, since keys are stored as
    strings by default in objects. At LOC 33, we don't encase them in inverted commas since, the datatype of 'str' variable is already a string, and
    each unit/character/sub-string would have the same datatype or 'character' datatype
*/ 
