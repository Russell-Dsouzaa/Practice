"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var mapS = {}, mapT = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var i = s_1[_i];
        if (i in mapS) {
            mapS[i]++;
        }
        else {
            mapS[i] = 1;
        }
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var i = t_1[_a];
        if (i in mapT) {
            mapT[i]++;
        }
        else {
            mapT[i] = 1;
        }
    }
    for (var _b = 0, _c = Object.keys(mapS); _b < _c.length; _b++) {
        var i = _c[_b];
        if (mapS[i] !== mapT[i]) {
            return false;
        }
    }
    return true;
}
function main() {
    var s = prompt("Enter the first string : "), t = prompt("Enter the second string : ");
    var result = isAnagram(s, t);
    if (result) {
        console.log("".concat(s, " and ").concat(t, " are anagrams of each other!"));
    }
    else {
        console.log("".concat(s, " and ").concat(t, " are not anagrams of each other :("));
    }
}
if (require.main === module) {
    main();
}
