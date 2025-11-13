import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

var Globalcycle;

class Node {
    value : number;
    next : null | Node;

    constructor (value : number = 0) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head : Node | null;
    size : number;

    constructor () {
        this.head = null; 
        this.size = 0;    // Indicates that the LL is initially empty
    }

    append (value : number) {
        const newNode : Node | null = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            var current : Node | null = this.head;

            while (current.next) {  // this ensures that our loop stops at the last node, instead of stopping after reaching 'null'
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
        return newNode;  // we add this LOC because of LOC 116
    }

    prepend (value : number) {
        var newNode : null | Node = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    remove (value : number) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;

            return value;
        }

        var previous : null | Node = null, current : Node | null = this.head;

        while (current) {
            if (current.value === value) {
                previous.next = current.next;
                this.size--;

                return value;
            }

            previous = current;
            current = current.next;
        }

        return null;  // assumes the case where-in, the required value is absent in the Linked-List
    }

    printList () {
        var current : null | Node = this.head, result : string = '', set1 : Set<Node> | null = new Set();

        while (current) {
            if (set1.has(current)) {
                result += `Cycle points to ${current.value}`;
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
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0;
    }
}

function main () {
    var size : number = Number(prompt("Enter the size of the Linked-List : ")), cycle : number = -1, map : {[key : number] : Node} = {}, LL : LinkedList | null = new LinkedList();

    for (let i : number = 0;i < size;i++) {
        map[i] = LL.append(Number(prompt(`Enter the ${i + 1}th node of the Linked-List : `)));
    }

    Globalcycle = cycle;    // we had to add this LOC because, without this, the contional at lOC 96 would be false and the initial list(LL before adding a cycle) won't include 'null' in the resulting string
    console.log(`Linked-List before adding a cycle : ${LL.printList()}`);

    cycle = Number(prompt("Enter the index at which the cycle should point to : "));
    Globalcycle = cycle;

    var lastNode : Node | null = map[size - 1], cyclicNode : Node | null = map[cycle];
    lastNode.next = cyclicNode;

    console.log(`Linked-List after adding a cycle in it : ${LL.printList()}`);

    console.log(`Cycle beigns at ${(isCycle(LL.head)).value}`);
} 

function isCycle (head1 : Node | null) : Node | null {
    var set1 : Set<Node> = new Set(), current : Node | null = head1;

    while (current) {
        if (set1.has (current)) {
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

    1. While specifying the type of a variable which holds a Set, we do it as follows : Set1 : Set<number> = new Set();    (we've used this at LOC 82)
    2. To type a variable holding an object(key-value pair), we do it as follows : map : {[key : number] : Node} = {};
      /or/ map : Record<number,Node> = {}; (this is when we know that all keys have the same data-type and all values have the same data-type)
      /or/ we could use Interface (google it)
      /or/ we could use Type Alias (google it)
*/