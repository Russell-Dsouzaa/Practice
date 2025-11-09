"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
var Globalcycle;
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
        this.size = 0; // Indicates that the LL is initially empty
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) { // this ensures that our loop stops at the last node, instead of stopping after reaching 'null'
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        return newNode; // we add this LOC because of LOC 116
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
        while (current) {
            if (current.value === value) {
                previous.next = current.next;
                this.size--;
                return value;
            }
            previous = current;
            current = current.next;
        }
        return null; // assumes the case where-in, the required value is absent in the Linked-List
    };
    LinkedList.prototype.printList = function () {
        var current = this.head, result = '', set1 = new Set();
        while (current) {
            if (set1.has(current)) {
                result += "Cycle points to ".concat(current.value);
                break;
            }
            set1.add(current);
            result += current.value + " -> ";
            current = current.next;
        }
        if (Globalcycle < 0) {
            result += "null";
        }
        return result;
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
    var size = Number(prompt("Enter the size of the Linked-List : ")), cycle = -1, map = {}, LL = new LinkedList();
    for (var i = 0; i < size; i++) {
        map[i] = LL.append(Number(prompt("Enter the ".concat(i + 1, "th node of the Linked-List : "))));
    }
    console.log("Linked-List before adding a cycle : ".concat(LL.printList()));
    cycle = Number(prompt("Enter the index at which the cycle should point to : "));
    Globalcycle = cycle;
    var lastNode = map[size - 1], cyclicNode = map[cycle];
    lastNode.next = cyclicNode;
    console.log("Linked-List after adding a cycle in it : ".concat(LL.printList()));
    console.log("Does Cycle exist : ".concat(isCycle(LL.head)));
}
function isCycle(head1) {
    var set1 = new Set(), current = head1;
    while (current) {
        if (set1.has(current)) {
            return true;
        }
        set1.add(current);
        current = current.next;
    }
    return false;
}
main();
/*
Learnings :-

    1. While specifying the type of a variable which holds a Set, we do it as follows : Set1 : Set<number> = new Set();    (we've used this at LOC 82)
    2. To type a variable holding an object(key-value pair), we do it as follows : map : {[key : number] : Node} = {};
      /or/ map : Record<number,Node> = {}; (this is when we know that all keys have the same data-type and all values have the same data-type)
      /or/ we could use Interface (google it)
      /or/ we could use Type Alias (google it)
*/ 
