import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint: true});

function dayOfTheWeek(day : number,month : number ,year : number) : string {
    const days : {[key : number] : string} = {    // we could've used an array as well (idk which has a faster lookup time)
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",  // we leave a trailing comma(,) since it's best-practice, in-case we decide to add more key-value pairs in it
    };

    var date : Date = new Date(year,month - 1,day);  // Date() method/function expects month in 0-indexed format
    return days[date.getDay()];   // .getDate() would return the month
}

function main() : void {
    var day : number = Number(prompt(`Enter a day (integer) : `)), month : number = Number(prompt(`Enter a month (integer) : `)), year : number = Number(prompt(`Enter a year (integer) : `));

    let result : string = dayOfTheWeek(day,month,year)
    console.log(`The day on the date ${day}/${month}/${year} was/would be ${result}`);
}

if (require.main === module) {
    main();
}