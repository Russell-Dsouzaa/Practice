import * as PromptSync from 'prompt-sync'
const prompt = PromptSync();

function main() {
    var prices : number[] = [], size : number = Number(prompt("Enter the size of the array : "));

    for (let i : number = 0;i < size; i++) {
        prices[i] = Number(prompt(`Enter the ${i+1}th element of the array : `));
    }

    var result : number = maxProfit(prices);

    console.log(result);
}

function maxProfit(prices : number[]) {
    var maxProfit : number = 0;

    for (let i : number = 0;i < prices.length - 1;i++) {
        for (let j : number = i + 1;j < prices.length;j++) {
            if (maxProfit < prices[j] - prices[i]) {
                maxProfit = prices[j] - prices[i];
            }
        }
    }

    return maxProfit;
}

main();