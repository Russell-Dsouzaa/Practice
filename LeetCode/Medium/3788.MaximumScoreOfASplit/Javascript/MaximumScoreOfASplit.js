const prompt = require('prompt-sync')();
const runningSum = require('../../../Easy/1480.RunningSum/Javascript/RunningSum.js');

function maximumSplit(arr1) {
    let max = -Infinity, prefixSum = runningSum([...arr1]), suffixMin = new Array(arr1.length);  // when we pass an array to a function, it is passed by reference (i.e. the original array is passed)

    suffixMin[arr1.length - 1] = Infinity;  // this is because there aren't any elements after the very last element, so we cannot calculate minSuffix for the very last element of 'nums' array
    for (let i = arr1.length - 2;i >= 0;i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1],arr1[i + 1]);
    }

    for (let i = 0;i < arr1.length - 1;i++) {
        let temp = prefixSum[i] - suffixMin[i];

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

function main() {
    let size = Number(prompt("Enter the size of the array : ")), array1 = [];

    for (let i = 0;i < size;i++) {
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    console.log(`The maximum split is : ${maximumSplit(array1)}`);
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. We initially thought of using the runningSum function within the for loop, to calculate 'prefixSum', but that again would result in O(n^2) time complexity, so we scratched it.
    2. When we pass an array to a function, it is passed by reference (i.e. the original array is passed)
*/

/*  first attempt, it resulted in a TLE error since, it's time complexity was O(n^2) that was because we were traversing 'nums' at every iteration of 'nums'. 
    
    var maxScore = -Infinity;  // Initially, we had stored '0' in maxScore, but then for inputs where all split scores were -ve values, our default value of '0' happened to be the greatest value and '0' used to be returned instead of the actual greatest value

    for (let i = 0;i < nums.length;i++) {
        let score = prefixSum(i) - suffixMin(i);

        if (score > maxScore) {
            maxScore = score;
        }
    }

    return maxScore;

    function prefixSum(index) {
        let sum = 0;

        for (let i = 0;i <= index;i++) {
            sum += nums[i];
        }

        return sum;
    }

    function suffixMin(index) {
        let minValue = Infinity; // we could also use Number.MAX_VALUE or Number.MAX_SAFE_VALUE instead

        for (let i = index + 1;i < nums.length;i++) {
            if (nums[i] < minValue) {
                minValue = nums[i];
            }
        }

        return minValue;
    }

    attempt 2 :- To solve the TLE error, we convert our O(n^2) program to O(n). Instead of calculating prefixSum and SuffixMin, we now calculate them before-hand and store them in an array
*/