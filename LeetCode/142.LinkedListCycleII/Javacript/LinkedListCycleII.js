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
        this.size = 0;
        this.head = null;
    }

    append (value) {
        var newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            var current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
        return newNode;
    }

    prepend (value) {
        var newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        
        return newNode;
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

        while (current) {
            if (current.value === value) {
                previous.next = current.next;
                this.size--;

                return value;
            }

            previous = current;
            current = current.next;
        }

        return null;
    }

    printList () {
        var current = this.head, set1 = new Set(), result = '';

        while (current) {
            if (set1.has(current)) {
                result += `Cycles back to ${current.value}`;
                break;
            }

            set1.add(current);
            result += current.value + " -> ";

            current = current.next;
        }

        if (Globalcycle < 0) {
            return result + "null";
        }

        return result;
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0;
    }
}

function main () {
    var size = Number(prompt("Enter the size of the Linked-List : ")), cycle = -1, map = {}, LL = new LinkedList();

    for (let i = 0;i < size;i++) {
        map[i] = LL.append(Number(prompt(`Enter the ${i + 1}th Node of the Linked-List : `)));
    }

    console.log(`The Linked-List before adding a cycle in it : ${LL.printList()}`);

    cycle = Number(prompt("At what index do you want the cycle to begin : "));
    Globalcycle = cycle;

    var lastNode = map[size - 1], cyclicNode = map[cycle];
    lastNode.next = cyclicNode;

    console.log(`The Linked-List after adding a cycle in it : ${LL.printList()}`);

    result = detectCycle(LL.head);

    console.log(`The cycle begins at ${result.value} node`);
}

function detectCycle (head1) {
    var set1 = new Set(), current = head1;

    while (current) {
        if (set1.has(current)) {
            return current;
        }

        set1.add(current);
        current = current.next;
    }

    return null;
}

main();

/*
Learnings :-

    1. In nested loops, 'break' keyword breaks the nearest loop, not it's parent loops. Whereas, in nested loops and conditional statements(combination of both),
    'break' keyword still breaks out of the neasrest loop, since 'break' keyword only applies to loops and ignores conditional statments
*/