import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function isAnagram(s : string, t : string) {
    if (s.length !== t.length) {
        return false;
    }

    let mapS = {}, mapT = {};

    for (let i of s) {
        if (i in mapS) {
            mapS[i]++;
        } else {
            mapS[i] = 1;
        }
    }

    for (let i of t) {
        if (i in mapT) {
            mapT[i]++;
        } else {
            mapT[i] = 1;
        }
    }

    for (let i of Object.keys(mapS)) {
        if (mapS[i] !== mapT[i]) {
            return false;
        }
    }

    return true;
}

function main() : void {
    let s : string = prompt("Enter the first string : "), t : string = prompt("Enter the second string : ");

    let result : boolean = isAnagram(s,t);

    if (result) {
        console.log(`${s} and ${t} are anagrams of each other!`);
    } else {
        console.log(`${s} and ${t} are not anagrams of each other :(`);
    }
}

if (require.main === module) {
    main();
}