const prompt = require('prompt-sync')();

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;    // while declaring(creating) a node, we make them point to null
    }
}

class LinkedList {
    constructor () {
        this.head = null; // this indicates that the Linked-List is currently empty
        this.size = 0;
    }

    append(value) {
        const new1 = new Node(value);

        if (!this.head) {
            this.head = new1;
            this.size++;
        } else {
            var current = this.head;

            while (current.next) {       // this ensures that we stop right at the last element/Node. Initially, we had 'current' here instead of current.next, that would make us stop at null(1 step after the last element/Node)
                current = current.next;
            }

            current.next = new1;
            this.size++;
        }
        // we could type 'this.size++; statement once at LOC 32 instead of typing it twice at LOC 21 & 30
    }

    prepend (value) {
        const new1 = new Node(value);

        new1.next = this.head;
        this.head = new1;

        this.size++;
    }

    remove (value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;

            return value;
        }

        var previous = null, current = this.head;

        while (current) {                           // Initially, this statement was 'while (current && current.next)', but in that case, our loop would stop at the second-last element, it would never visit the very last element
            if (current.value === value) {
                previous.next = current.next;
                this.size--;

                return value;
            } else {
                previous = current;
                current = current.next;
            }
        }

        return null;  // this case assumes that the node/value doesn't exist in the LinkedList
    }

    printList () {
        var current = this.head, result = '';

        while (current) {
            result += current.value + ` -> `;    // be careful, we initially had written here just current instead of current.value
            current = current.next;
        }

        console.log(result + `null`);
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}

function main() {
    var size = Number(prompt("Enter the size of the first LinkedList : ")), LL1 = new LinkedList(), size2 = Number(prompt("Enter the size of the second Linked-List : ")), LL2 = new LinkedList();

    for (let i = 0;i < size;i++) {
        LL1.append(Number(prompt(`Enter the ${i+1}th element of the first Linked-List : `)));
    }

    for (let i = 0;i < size2;i++) {
        LL2.append(Number(prompt(`Enter the ${i + 1}th element of the second Linked-List : `)));
    }

    console.log("Both Linked-Lists before getiing merged : ");
    LL1.printList();
    LL2.printList();

    var result = merge(LL1.head,LL2.head);

    console.log("Merged Linked List : ");
    result.printList();
}

function merge(head1,head2) {
    const newList = new LinkedList(), temp = new Node(0);
    var current = temp;

    while (head1 && head2) {
        if (head1.value < head2.value) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }

        current = current.next;
    }

    if (head1) {
        current.next = head1;
    } else {
        current.next = head2;
    }

    newList.head = temp.next;

    return newList;             // we tried returning newList.head /or/ newList.next, but it raise error saying that .printList() in the 'main' function won't work. This is because newList is a Linked-List while newList.head is a Node (which doesn't have acces to printList() method since it's defined within 'LinkedList' class)
}

main();

/*
Learnings :-
    1. In order to print a LinkedList, do not print the linked list's head in console.log() as a normal variable. Instead, use the printList() method which 
    we defined (google why we can't print LinkedLists as normal variables).
*/