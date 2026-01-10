const prompt = require('prompt-sync')();

class Node {
    constructor (val,left = null,right = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

function buildTree (array1) {
    if (array1.length < 1) {
        return null;
    }

    const root = new Node(array1[0]);
    root.left = array1[1] !== null ? new Node(array1[1]) : null;
    root.right = array1[2] !== null ? new Node(array1[2]) : null;

    return root;
}

function checkTree(root) {
    if (!root || !root.right || !root.left) {
        return false;
    } else if (root.val === root.right.val + root.left.val) {
        return true;
    } else {
        return false;
    }
}

function main() {
    var array1 = [], size = Number([prompt("Enter the size of the array : ")]);

    for (let i = 0;i < size;i++){
        array1.push(Number(prompt(`Enter the ${i + 1}th element of the array : `)));
    }

    const root = buildTree(array1);

    console.log(checkTree(root));
}

main();

/*
Learnings :-
    1. instead of prompt-sync library, we could use readline library to accept user-input (read-up on how to user this library before using it)
*/

/*

BlackBox(base model's) generated solution (And yes, my solution did take 'inspiration' from blackbox's)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(arr) {
    if (arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    root.left = arr[1] !== null ? new TreeNode(arr[1]) : null;
    root.right = arr[2] !== null ? new TreeNode(arr[2]) : null;
    return root;
}

var checkTree = function(root) {
    if (!root || !root.left || !root.right) return false;
    return root.val === root.left.val + root.right.val;
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the tree as an array [root, left, right]: ', (input) => {
    try {
        const arr = JSON.parse(input);
        if (arr.length !== 3) {
            console.log('Please enter exactly 3 values.');
        } else {
            const root = buildTree(arr);
            const result = checkTree(root);
            console.log('Result:', result);
        }
    } catch (e) {
        console.log('Invalid input. Please enter a valid array.');
    }
    rl.close();
});
*/