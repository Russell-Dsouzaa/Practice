// method 1 to try to make user-input through 'prompt()' work in Typescript
// const prompt = require('prompt-sync')();
// method 2
// import promptSync from 'prompt-sync';
// const prompt = promptSync();
function TwoSum(arr1, target) {
    for (var i = 0; i < arr1.length - 1; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (arr1[j] == target - arr1[i]) {
                return [i + 1, j + 1];
            }
        }
    }
    return (-1);
}
function main() {
    var array1 = [1, 2, 3, 4, 5];
    var target = 9;
    var result = TwoSum(array1, target);
    if (result == (-1)) {
        console.log("No two array elements add up to the target");
    }
    else {
        console.log("The indices of the elements which add up to the target element(".concat(target, ") are : ").concat(result[0], " and ").concat(result[1]));
    }
}
main();
