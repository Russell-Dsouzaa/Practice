import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function convertNumber(var1 : number) : string {
    // return String(var1);

    return var1 + '';
}

function main() : void {
    let result : string= convertNumber(Number(prompt("Enter an Integer : ")));
    console.log(`Datatype of ${result} is ${typeof(result)}`);
}

if (require.main === module) {
    main();
}