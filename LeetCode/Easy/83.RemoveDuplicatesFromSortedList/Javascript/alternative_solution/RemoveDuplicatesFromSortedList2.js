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

        if (!this.head) {
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

        while (current && current.value !== value) {
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

    console.log("Linked List before removing duplicates : ");
    new1.printList();

    const result = removeDuplicates(new1);

    console.log("Linked List after removing the duplicates : ");
    result.printList();
}

function removeDuplicates(head1) {
    // var current = head1;

    // while (current) {
    //     while (current.next && current.value === current.next.value) {
    //         current.next = current.next.next;
    //     }

    //     current = current.next;
    // }

    // return head1;

    var current = head1.head;

    while (current !== null && current.next !== null) {
        while (current.next.value === current.value) {
            current.next = current.next.next;
        }

        current = current.next;
    }
    
    return head1;
}

main();

/*
Learnings :-
    1. .val is used to access values in both trees and linked-lists. But those aren't hard-and-fast rules, they're just conventions. Here, we decided to use .value instead of .val
*/