"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true }); // ik, I didn't need to specify 'any' data-type since it's set to any by default. I just wanted to let y'all know that I knew that this could be done
var Node = /** @class */ (function () {
    function Node(value) {
        if (value === void 0) { value = 0; }
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
        }
        else {
            var current = this.head; // we need to have the exact same type-check of the variables which we plan on storing in 'current'. If They mis-match, tsc raises an error.
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
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
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }
        var previous = null, current = this.head;
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }
        if (current) {
            previous.next = current.next;
            this.size--;
            return value;
        }
        return null;
    };
    LinkedList.prototype.printList = function () {
        var current = this.head, result = '';
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log("".concat(result, " -> null"));
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    return LinkedList;
}());
function main() {
    var size = Number(prompt("Enter the size of the array : "));
    var new1 = new LinkedList();
    for (var i = 0; i < size; i++) {
        new1.append(Number(prompt("Enter the ".concat(i + 1, "th element of the Linked-list :"))));
    }
    console.log("Linked List before removing duplicates : ");
    new1.printList();
    removeDuplicates(new1.head); // initially, we were passing just 'new1' as an argument, but tsc used to raise error saying that their types didn't match(new1 : LinkedList while removeDuplicates() has a parameter having type Node). So, to solve this, we pass new1.head(which is a Node) instead of just new1
    console.log("Linked List after removing duplicates : ");
    new1.printList();
}
function removeDuplicates(new1) {
    var current = new1;
    while (current && current.next) {
        if (current.value === current.next.value) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
}
main();
/*
Learnings :-
    1. Let's say there are two variables 'a' & 'b' such that, a : number | null while b : number. This would raise an error since tsc would
    say that "there's a possibility that b could store 'null" but you haven't typed it as null, you only typed it as 'number'.
    Hence, we need to have the exact same type-check of the variables which we plan on storing in 'current'. If They mis-match, tsc raises an error.
*/ 
