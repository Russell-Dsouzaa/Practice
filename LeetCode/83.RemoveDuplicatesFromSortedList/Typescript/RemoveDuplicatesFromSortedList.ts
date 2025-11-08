import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});  // ik, I didn't need to specify 'any' data-type since it's set to any by default. I just wanted to let y'all know that I knew that this could be done

class Node {
    value : number | null | undefined; // without LOC 5 & 6, tsc raises errors during compilation
    next : Node | null | undefined;    // I put both, undefined as well as null, because I don't know which one is the correct one out of the two. It's most-probably Node | null and number | null

    constructor (value = 0) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head : Node | null | undefined;    // I initially added LinkedList in place of Node, because of which it raised an eroor at LOC 27
    size : number;

    constructor () {
        this.head = null;
        this.size = 0;
    }

    append(value : number) {
        const newNode : Node = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            var current : Node | null | undefined = this.head;  // we need to have the exact same type-check of the variables which we plan on storing in 'current'. If They mis-match, tsc raises an error.

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;

            this.size++;
        }
    }

    prepend(value : number) {
        const newNode : Node = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    remove (value : number) : number | null | undefined {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;

            return value;
        }

        var previous : null | Node = null, current : null | Node = this.head;
        
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (current){
            previous.next = current.next;
            this.size--;

            return value;
        }

        return null;
    }

    printList() {
        var current : Node = this.head, result : string = '';

        while (current) {
            result += current.value + ` -> `;
            current = current.next;
        }

        console.log(`${result} -> null`);
    }

    getSize () {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}

function main() {
    var size : number = Number(prompt("Enter the size of the array : "));
    const new1 : LinkedList = new LinkedList();

    for (let i : number = 0;i < size;i++) {
        new1.append(Number(prompt(`Enter the ${i+1}th element of the Linked-list :`)));
    }

    console.log("Linked List before removing duplicates : ");
    new1.printList();

    removeDuplicates(new1.head);                                   // initially, we were passing just 'new1' as an argument, but tsc used to raise error saying that their types didn't match(new1 : LinkedList while removeDuplicates() has a parameter having type Node). So, to solve this, we pass new1.head(which is a Node) instead of just new1

    console.log("Linked List after removing duplicates : ");
    new1.printList();
}

function removeDuplicates (new1 : Node | null) {
    var current : Node | null = new1;

    while (current && current.next) {
        if (current.value === current.next.value) {
            current.next = current.next.next;
        } else {
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