"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function com(arr1, arr2) {
    if (arr1 === null || arr2 === null) {
        return false;
    }
    else if (arr1.length !== arr2.length) {
        return false;
    }
    else if (arr1.length < 1 || arr2.length < 1) {
        return true; // we put this here to satisfy that one case on CodeWars (arr1 = [] and arr2 = []). I know, this is a bit different case than the conditional. We check whether any ONE of them's empty, while the testcase sends arguments where BOTH inputs are empty.
    }
    var dict1 = {}, dict2 = {};
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] in dict1) {
            dict1[arr1[i]] += 1;
        }
        else {
            dict1[arr1[i]] = 1;
        }
        if (arr2[i] in dict2) {
            dict2[arr2[i]] += 1;
        }
        else {
            dict2[arr2[i]] = 1;
        }
    }
    for (var _i = 0, _a = Object.keys(dict1); _i < _a.length; _i++) {
        var i = _a[_i];
        var num = Number(i);
        if (dict2[num * num] !== dict1[num]) {
            return false;
        }
    }
    return true;
}
function main() {
    var arr1 = [], arr2 = [], size1 = Number(prompt("Enter the size of the first array : ")), size2 = Number(prompt("Enter the size of the second array : "));
    for (var i = 0; i < size1; i++) {
        arr1.push(Number(prompt("Enter the ".concat(i + 1, "th element of the first array : "))));
    }
    for (var i = 0; i < size2; i++) {
        arr2.push(Number(prompt("Enter the ".concat(i + 1, "th element of the second array : "))));
    }
    if (com(arr1, arr2)) {
        console.log("".concat(arr1, " and ").concat(arr2, " are equal :)"));
    }
    else {
        console.log("".concat(arr1, " and ").concat(arr2, " are not equal it seems :("));
    }
}
if (require.main === module) {
    main();
}
