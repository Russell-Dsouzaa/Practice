const prompt = require('prompt-sync')();

class Node {
    constructor (value) {
        this.val = value;
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
            this.size++;
        } else {
            var current = this.head;

            while (current && current.next) {  // ig, having just 'current.next' in the conditional statement work the same, not sure though
                current = current.next;
            }

            current.next = newNode;
            this.size++;
        }
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

        if (this.head.val === value) {
            this.head = this.head.next;
            this.size--;

            return value;
        }

        var previous = null, current = this.head;

        while (current) {
            if (current.val === value) {
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
        var current = this.head, result = '';

        while (current) {
            result += current.val + ' -> ';
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

function nodesBetweenCriticalPoints (head) {
    if (!head || !head.next) {
        return [-1,-1];
    }

    var critNodeIndices = [], minDist = -1, maxDist = -1, prev = head, curr = head.next, index = 1;

    while (curr && curr.next) {
        if (prev.val < curr.val && curr.next.val < curr.val || curr.val < prev.val && curr.val < curr.next.val) {
            critNodeIndices.push(index);
        }

        prev = curr;
        curr = curr.next;

        index++;  // initially, we we incrementing index at LOC 101, but that resulted in index being incremented only when a crital point was found
    }

    if (critNodeIndices.length < 2) {
        return [minDist,maxDist];
    } else if (critNodeIndices.length === 2) {
        return [critNodeIndices[1] - critNodeIndices[0], critNodeIndices[1] - critNodeIndices[0]];
    }

    maxDist = critNodeIndices[critNodeIndices.length - 1] - critNodeIndices[0];

    let temp = Number.MAX_VALUE;
    for (let i = 0;i < critNodeIndices.length - 1;i++) {
        if (temp > critNodeIndices[i + 1] - critNodeIndices[i]) {
            temp = critNodeIndices[i + 1] - critNodeIndices[i];
        }
    }

    return [temp,maxDist];
}

function main() {
    var size = Number(prompt("Enter the size of the Linked List : "));
    const LL = new LinkedList();

    for (let i = 0;i < size;i++) {
        LL.append(Number(prompt(`Enter the ${i + 1}th node of the Linked List : `)));
    }

    var result = nodesBetweenCriticalPoints(LL.head);

    console.log(`minimum and maximum distance between critical points are : ${result}`);
}

if (require.main === module) {
    main();
}

module.exports = { Node, LinkedList };

/*
Learnings :- 

    1. 'head.next' at LOC 93 and 'curr.next' at LOC 95 ensure that the while loop runs from second node upto the second last node. We do this, since the first and last nodes cannot be critical points.
*/