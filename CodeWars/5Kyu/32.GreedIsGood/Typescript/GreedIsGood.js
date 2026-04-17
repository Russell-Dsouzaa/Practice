"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function GIG(arr1) {
    var map = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    }, result = 0;
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        if (i in map) {
            map[i] += 1;
        }
    }
    for (var _a = 0, _b = Object.keys(map); _a < _b.length; _a++) {
        var i = _b[_a];
        if (i === '1') {
            if (map[i] > 2) {
                var divisible = Math.floor(map[i] / 3), temp = map[i] % 3;
                result += (divisible * 1000) + (temp * 100);
            }
            else {
                result += map[i] * 100;
            }
        }
        else if (i === '5') {
            if (map[i] > 2) {
                var divisible = Math.floor(map[i] / 3), temp = map[i] % 3;
                result += (divisible * 500) + (temp * 50);
            }
            else {
                result += map[i] * 50;
            }
        }
        else if (i === '6') {
            if (map[i] > 2) {
                result += Math.floor(map[i] / 3) * 600;
            }
        }
        else if (i === '4') {
            if (map[i] > 2) {
                result += Math.floor(map[i] / 3) * 400;
            }
        }
        else if (i === '3') {
            if (map[i] > 2) {
                result += Math.floor(map[i] / 3) * 300;
            }
        }
        else if (i === '2') {
            if (map[i] > 2) {
                result += Math.floor(map[i] / 3) * 200;
            }
        }
    }
    return result;
}
function main() {
    var arr1 = [];
    for (var i = 0; i < 5; i++) {
        arr1.push(Number(prompt("Enter an Integer between 1 and 6 (inclusive) : ")));
    }
    var result = GIG(arr1);
    console.log("The score : ".concat(result));
}
if (require.main === module) {
    main();
}
