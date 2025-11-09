const prompt = require('prompt-sync')();

var Globalcycle;

class Node {
    constructor (value = 0) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    append (value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current && current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
        return newNode;  // we add this LOC because of LOC 67
    }

    prepend (value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

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

        let current = this.head, previous = null;

        while (current) {
            if (current.value === value) {
                previous.next = current.next;
                this.size--;
                
                return value;
            } else {
                previous = current;
                current = current.next;
            }
        }

        return null;
    }

    printList () {
        var current = this.head, result = '', set1 = new Set();

        while (current) {
            if (set1.has(current)) {    // set1[current] won't work here since indexing doesn't work in Sets
                result += `Cycles back to ${current.value}`;
                break;
            }

            set1.add(current);
            result += current.value + ' -> ';
            current = current.next;
        }

        if (Globalcycle < 0) {
            result += 'null';
        }

        console.log(result);
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0;
    }
}

function main() {
    var new1 = new LinkedList(), cycle = -1, map = {}, size = Number(prompt("Enter the size of the Linked-List : "));

    for (let i = 0;i < size;i++) {
        map[i] = new1.append(Number(prompt(`Enter the ${i+1}th element of the Linked List : `)));
    }

    console.log("LinkedList before the cycle is formed : ");
    new1.printList();

    cycle = Number(prompt("Enter the index at which the cycle points to : "));
    Globalcycle = cycle;    // we do this in order to use it back at LOC 89

    var lastNode = map[size - 1], cyclicNode = map[cycle];
    lastNode.next = cyclicNode;    // every cyclic LL begins at the last Node of a LL

    console.log("LinkedList after the cycle is formed : ");
    new1.printList();

    console.log(isCycle(new1.head));
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

    1. Sets have .add() to add elements and .has() to check membership
    2. [] indexing into a set doesn't work, since they don't have key-value pairs as in Objects, neither do they have indices as in arrays
*/