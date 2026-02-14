import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function isAnagram(str: string) : boolean {
    let set : Set<string> = new Set();

    for (let i of str) {
        if (set.has(i.toLowerCase())) {
            return false;
        } else {
            set.add(i.toLowerCase());
        }
    }

    return true;
}

function main() : void {
    let str : string = prompt("Enter a string : ");

    console.log(isAnagram(str));
}

if (require.main === module) {
    main();
}