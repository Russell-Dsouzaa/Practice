"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function dayOfTheWeek(day, month, year) {
    var days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday", // we leave a trailing comma(,) since it's best-practice, in-case we decide to add more key-value pairs in it
    };
    var date = new Date(year, month - 1, day); // Date() method/function expects month in 0-indexed format
    return days[date.getDay()]; // .getDate() would return the month
}
function main() {
    var day = Number(prompt("Enter a day (integer) : ")), month = Number(prompt("Enter a month (integer) : ")), year = Number(prompt("Enter a year (integer) : "));
    var result = dayOfTheWeek(day, month, year);
    console.log("The day on the date ".concat(day, "/").concat(month, "/").concat(year, " was/would be ").concat(result));
}
if (require.main === module) {
    main();
}
