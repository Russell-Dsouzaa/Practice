var inputPrompt = require('prompt-sync')({ sigint: true }); // original LOC at 1, const PromptSync = require('prompt-sync');
// const inputPrompt = PromptSync({ sigint: true });
var TreeNode = /** @class */ (function () {
    function TreeNode(val, right, left) {
        if (right === void 0) { right = null; }
        if (left === void 0) { left = null; }
        this.val = val;
        this.right = right;
        this.left = left;
    }
    return TreeNode;
}());
function buildTree(array1) {
    if (array1.length < 3) {
        return null;
    }
    var root = new TreeNode(array1[0]);
    root.left = new TreeNode(array1[1]);
    root.right = new TreeNode(array1[2]);
    return root;
}
function checkTree(root) {
    if (!root || !root.left || !root.right) {
        return false;
    }
    else if (root.val === root.right.val + root.left.val) {
        return true;
    }
    else {
        return false;
    }
}
function main() {
    var size = Number(inputPrompt("Enter the size of the array : ")), array1 = [];
    for (var i = 0; i < size; i++) {
        array1.push(Number(inputPrompt("Enter the ".concat(i + 1, "th element of the array : "))));
    }
    var root = buildTree(array1);
    var result = checkTree(root);
    console.log(result);
}
main();
