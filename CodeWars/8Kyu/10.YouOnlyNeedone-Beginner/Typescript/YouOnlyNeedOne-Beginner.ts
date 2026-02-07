import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function search(array1 : any,needle : number) : boolean {  // tsc was raising errors at LOCs 7 and 15, saying that strings and numbers cannot be compared
    let start : number = 0, end : number = array1.length - 1;

    array1.sort((a,b) => a - b);

    while (start <= end) {
        let middle : number = Math.floor((start + end) / 2);

        if (array1[middle] === needle) {
            return true;
        }
        else if (array1[middle] < needle) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return false;
}

function main() : void {
    let size : number = Number(prompt("Enter the size of the array : ")), array1 : (string | number)[] = [], needle : number = Number(prompt("Enter the value which you would want to search within the array : "));

    for (let i = 0;i < size;i++){
        array1.push(prompt(`Enter the ${i + 1}th element of the array : `)); // currently, both integers and strings are stored as strings in the array
    }

    // now we convert the numbers(which are technically strings currently) into number datatype
    let cleaned_array1 : (string | number)[] = array1.map(elem => {  // we could do let array1 = array1.map() too (Note, this reassignment to the same array which we are iterating over, won't work if we use const instead of let)
        let num : number = Number(elem);
        return Number.isNaN(num) ? elem : num;
    });

    var result : boolean = search(cleaned_array1,needle);

    if (result === true) {
        console.log(`${needle} is present in the input array : ${cleaned_array1}`);
    } else {
        console.log(`${needle} is not present in the input array : ${cleaned_array1} :(`);
    }
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. Number.isNan() method returns true if the argument passed to it is not a number, or else it returns false. Used to figure out whether a given value is a 'Number'/'number' or not.
    2. At LOC, 33, we could reassign the modified array elements to the same array over which we're currently iterating over. Note, this would only work if we use let/var, doesn't work with const.
*/

// Note :- 
//   1. This program expects a number as 'needle's' value. If a string/character is entered instead, it would always return 'Nan ot present'(I'm paraphrasing here).
//   2. Currently this program works fine for inputs not containing strings, or for inputs where the needle is positioned before strings.