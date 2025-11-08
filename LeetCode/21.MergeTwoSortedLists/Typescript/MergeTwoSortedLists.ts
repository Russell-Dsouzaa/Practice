import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

class Node {
    value : number;
    next : Node | null;

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
        this.size = 0;
    }

    append (value : number) {
        const newNode : Node = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.size++;
        } else {
            var current : Node = this.head;

            while (current && current.next) {  // this ensures that we stop right at the last element/Node. Initially, we had 'current' here instead of current.next, that would make us stop at null(1 step after the last element/Node)
                current = current.next;
            }

            current.next = newNode;
            this.size++;
        }
    }

    prepend (value : number) {
        const newNode : Node = new Node(value);

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

        var previous : Node | null = null, current : Node | null = this.head;

        while (current && current.next) {    // loop would stop when 'current' reaches the last Node of the Linked-List
            if (current.value === value) {
                previous.next = current.next;      // try removing the very first element of the Linked-List

                this.size--;
                return value;
            }

            previous = current;
            current = current.next;
        }

        return null;  // this assumes the case where-in the required node doesn't exist in the Linked-List
    }

    printList () {
        var current : Node | null = this.head, result : string = '';

        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }

        console.log(result + 'null');
    }

    getSize () {
        return this.size;
    }

    isEmpty () {
        return this.size === 0;
    }
}

function main () {
    var size : number = Number(prompt("Enter the size of the first LinkedList : ")), size2 : number = Number(prompt("Enter the size of the second Linked-List : "));
    const LL1 : LinkedList = new LinkedList(), LL2 : LinkedList = new LinkedList();

    for (let i : number = 0;i < size;i++) {
        LL1.append(Number(prompt(`Enter the ${i + 1}th node of the Linked-List : `)));
    }

    for (let i : number = 0;i < size2;i++) {
        LL2.append(Number(prompt(`Enter the ${i+1}th node of the second Linked-List : `)));
    }

    console.log("Both Linked-Lists before merging : ");
    LL1.printList();
    LL2.printList();

    var result : LinkedList = merge(LL1.head,LL2.head);

    console.log("Merged Linked-List : ");
    result.printList();
}

function merge(Node1 : Node | null, Node2 : Node | null) {
    const newList : LinkedList = new LinkedList();
    var temp : Node | null = new Node(0), current : Node | null = temp;

    while (Node1 && Node2) {
        if (Node1.value < Node2.value) {
            current.next = Node1;
            Node1 = Node1.next;
        } else {
            current.next = Node2;
            Node2 = Node2.next;
        }

        current = current.next;
    }

    current.next = Node1 ? Node1 : Node2;

    newList.head = temp.next;
    return newList;
}

main();

/*
Learnings :-
    1. At LOC 66, I realized that, if the Node which we want ot remove happens to be the very first element of the Linked-List, then atp 'previous' would be null and the program won't work as expected.
    But, then I noticed the conditional statement at LOC 55 which assumes this very case. (What a beautiful world we live in, no ?)
*/