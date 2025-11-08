const prompt = require('prompt-sync')();

class Node {
    constructor (value) {
        this.value = value;    // usually, we use .val in both trees and linked-lists. But those aren't hard-and-fast rules, they are just universally-accepted conventions
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null; // Initially, head of the linked-list is null (denotes that it's empty)
        this.size = 0;    // used to keep track of the total number of nodes in the Linked-list
    }

    // adds a new node to the end of the list
    append (value) {
        const newNode = new Node(value);

        if (!this.head) {          // this is to set the very first element of the Linked-list
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }

    // adds a new node to the beginning of the list
    prepend (value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    // removes node with a specific value
    remove (value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;

            return value;
        }

        let current = this.head, previous = null;

        while (current && current.value !== value) {    // the first half of the conditional statement checks whether the LinkedList is empty or not, while the second half check whether the current node has value which we're looking for
            previous = current;
            current = current.next;
        }

        if (current) {  // this assumes the case where the required value is found in the linked-list
            previous.next = current.next;
            this.size--;

            return value;
        }

        return null;  // this assumes the case where the value isn't found in the linked-list, and we reach the end of the list and 'current' variable points to null/undefined(not sure)
    }

    printList() {
        var current = this.head, result = "";

        while (current) {
            result += current.value + " -> ";

            current = current.next;
        }

        console.log(result + "null");
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}

function main() {
    const new1 = new LinkedList(), size = Number(prompt("Enter the number of elements you wish to add to the Linked List : "));

    for (let i = 0;i < size;i++) {
        new1.append(Number(prompt("Enter an integer : "))); // We could call 'prompt()' function within append() method
    }

    console.log("Original list:");
    new1.printList();

    removeDuplicates(new1.head);

    console.log("List after removing duplicates:");
    new1.printList();
}

function removeDuplicates(head1) {
    if (!head1) return head1;

    let current = head1;

    while (current && current.next) {                // if we take a look at our leetcode solution for JS, we had 2 nested while loops, both of which checking that the current node and next node aren't null or not. Here, we're checking both of them in a single while loop
        if (current.value === current.next.value) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head1;
}

main();

/*
Learnings :-
    1. .val is used to access values in both trees and linked-lists. But those aren't hard-and-fast rules, they're just conventions. Here, we decided to use .value instead of .val
    2. If we remove 'current &&' in LOC 117, the program still works as intended, idk why though. (Maybe, it applies to some edgecase)
*/