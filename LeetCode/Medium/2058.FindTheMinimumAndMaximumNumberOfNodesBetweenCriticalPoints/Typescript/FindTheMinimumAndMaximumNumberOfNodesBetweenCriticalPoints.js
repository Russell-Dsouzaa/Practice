"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.size++;
        }
        else {
            var curr = this.head;
            while (curr && curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.size++;
        }
    };
    LinkedList.prototype.prepend = function (value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    };
    LinkedList.prototype.remove = function (value) {
        if (!this.head) {
            return null;
        }
        else if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }
        var prev = null, curr = this.head;
        while (curr && curr.next) {
            if (curr.value === value) {
                prev.next = curr.next; // tsc raises an error/warning that 'prev' might be null. prev would be null if the very 1st node's value === value, in that case, prev.next would be null.next , but we take care of that case at LOC 52
                this.size--;
                return value;
            }
            prev = curr;
            curr = curr.next;
        }
        return null;
    };
    LinkedList.prototype.printList = function () {
        var result = '', curr = this.head;
        while (curr) {
            result += "".concat(curr.value, " -> ");
            curr = curr.next;
        }
        return "result + null";
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    return LinkedList;
}());
function nodesBetweenCriticalPoints(head) {
    if (!head || !head.next) {
        return [-1, -1];
    }
    var minDist = -1, maxDist = -1, critNodesIndices = [], index = 1, prev = head, curr = head === null || head === void 0 ? void 0 : head.next; // if head is empty, tsc would raise an error saying "cannot read properties of null", to avoid this, we put a check to use .next only if 'head' node itself isn't empty
    while (curr.next) { // LOC 95 and LOC 97 make the while loop run from 2nd node upto the second-last node
        if (prev.value < curr.value && (curr === null || curr === void 0 ? void 0 : curr.next.value) < curr.value || prev.value > curr.value && (curr === null || curr === void 0 ? void 0 : curr.next.value) > curr.value) {
            critNodesIndices.push(index);
        }
        index++; // initially, we we incrementing index at LOC 101, but that resulted in index being incremented only when a crital point was found
        prev = curr;
        curr = curr === null || curr === void 0 ? void 0 : curr.next;
    }
    if (critNodesIndices.length < 2) {
        return [minDist, maxDist];
    }
    else if (critNodesIndices.length === 2) {
        return [critNodesIndices[1] - critNodesIndices[0], critNodesIndices[1] - critNodesIndices[0]];
    }
    maxDist = critNodesIndices[critNodesIndices.length - 1] - critNodesIndices[0];
    var temp = Number.MAX_VALUE;
    for (var i = 0; i < critNodesIndices.length - 1; i++) { // loop runs from 1st element to the second-last element
        if (critNodesIndices[i + 1] - critNodesIndices[i] < temp) {
            temp = critNodesIndices[i + 1] - critNodesIndices[i];
        }
    }
    return [temp, maxDist];
}
function main() {
    var LL = new LinkedList(), size = Number(prompt("Enter the size of the Linked List : "));
    for (var i = 0; i < size; i++) {
        LL.append(Number(prompt("Enter the ".concat(i + 1, "th node of the Linked List : "))));
    }
    var result = nodesBetweenCriticalPoints(LL.head);
    console.log("Minimum and Maximum nodes between critical points are : ".concat(result));
}
main();
/*
learnings :-

    1. At LOC 32, we initially had just curr.next within the while loop conditional. But chatGPT suggested that (curr && curr.next) conditional would be better. Both work the same but the latter
    covers some edge cases ig (for our program, 'curr' would never be null if curr.next exists, so for us this won't make any difference, but we still implement it as best practice)

    2. At LOC 95, if head is empty, tsc would raise an error saying "cannot read properties of null", to avoid this, we put a check to use .next only if 'head' node itself isn't empty

    3. LOC 95 and LOC 97 make the while loop(at LOC 97) run from 2nd node upto the second-last node

    4. Initially, we we incrementing index at LOC 106, but that resulted in index being incremented only when a crital point was found
*/ 
