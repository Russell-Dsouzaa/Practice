import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

function maxProfit(prices : number[]) : number {
    var result : number = 0, min : number = 0;

    for (let i = 0;i < prices.length;i++) {
        min = prices[i];

        while (prices[i + 1] > prices[i] && i < prices.length) {
            i += 1;
        }

        result += prices[i] - min;
    }

    return result;
}

function main() : void {
    var pricesArray : number[] = [], sizePricesArray : number = Number(prompt("Enter the size of the 'prices' array : "));

    for (let i = 0;i < sizePricesArray;i++) {
        pricesArray.push(Number(prompt(`Enter the ${i + 1}th element of the 'prices' array : `)));
    }

    var result : number = maxProfit(pricesArray);
    console.log(result);
}

main();