const inputPrompt = require('prompt-sync')({ sigint: true });  // original LOC at 1, const PromptSync = require('prompt-sync');
// const inputPrompt = PromptSync({ sigint: true });

class TreeNode {
    right: TreeNode | null;    // even after commenting out LOC 5,6 & 7, the program still works as expected
    left: TreeNode | null;
    val: number;

    constructor(val: number, right: TreeNode | null = null, left: TreeNode | null = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

function buildTree(array1: number[]): TreeNode | null {
    if (array1.length < 3) {      // unlike our JS solution, we check here itself whether array1 has atleast 3 elements (In JS solution, we check whether array[1] and array1[2] elements are null before assigning them to root's right & left children)
        return null;
    }

    const root = new TreeNode(array1[0]);
    root.left = new TreeNode(array1[1]);
    root.right = new TreeNode(array1[2]);

    return root;
}

function checkTree(root: TreeNode | null): boolean {
    if (!root || !root.left || !root.right) {
        return false;
    } else if (root.val === root.right.val + root.left.val) {
        return true;
    } else {
        return false;
    }
}

function main() {
    var size: number = Number(inputPrompt("Enter the size of the array : ")), array1: number[] = [];

    for (let i: number = 0; i < size; i++) {
        array1.push(Number(inputPrompt(`Enter the ${i + 1}th element of the array : `)));
    }

    const root = buildTree(array1);
    var result: boolean = checkTree(root);

    console.log(result);
}

main();


/*
Learnings :-
    1. I asked Blackbox AI (base model) to fix my solution (my .ts program was raising 7 errors when compiled). It made some Quality-of-life changes at LOC 1 & 17
    2. The only significant change it did, was at LOC 5,6 & 7 (6 out of the 7 errors were because of this, that .left & .right were'nt typed). I think that the 7th error too was because of this, since all 7 got fixed after implementing this change
*/