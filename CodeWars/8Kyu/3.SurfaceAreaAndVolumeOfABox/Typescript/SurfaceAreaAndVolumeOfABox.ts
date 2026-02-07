import * as PromptSync from 'prompt-sync';    // if you have a look at the typescript solution of 1.AreYouPlayingBanjo, you'll notice that this line in it 
// doesn't have a semi-colon at the end of the LOC. That is because, js compilers put a semi-colon implicitly at the end of every LOC if they're not already there.
// So, here even if we didn't put a semi-colon, it would work as expected.
const prompt = PromptSync();

function main() : void {
    var length : number = Number(prompt("Enter the length of the Box : ")), breadth : number = Number(prompt("Enter the breadth of the Box : ")), 
    height : number = Number(prompt("Enter the height of the Box :"));
    
    var result : number[] = SAandV(length,breadth,height);  // here, we could have called the function directly in the console.log(), but that way we wouldn't
    // be able to use type annotation to check whether data of the correct datatype is being stored in the 'result' variable.
    console.log(result);
}

function SAandV(length: number,breadth: number,height : number) : number[] {
    return [2 * ((length * breadth) + (breadth * height) + (length * height)),length * breadth * height];
}

main();