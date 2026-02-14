import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function setAlarm(employed : boolean, vacation : boolean) : boolean {
    if (employed && !vacation) {
        return true;
    }

    return false;
}

function main() : void {
    let employed : boolean = Boolean(prompt(`Enter either a truthy or a falsy value for employed variable/field : `)), vacation : boolean = Boolean(prompt(`Enter either a truthy or a falsy value for vacation variable/field : `));

    var result : boolean = setAlarm(employed,vacation);
    console.log(result);
}

if (require.main === module) {
    main();
}