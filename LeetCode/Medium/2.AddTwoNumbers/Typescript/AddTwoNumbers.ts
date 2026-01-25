import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

// not sure whether the order in which we export and import functions matter ?
const { Node, LinkedList } = require('../../2058.FindTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints/Javascript/FindTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints');

function addTwoNumbers(LL1,LL2) {  // we cannot typecheck(atleast in the traditional way) since 'LinkedList' isn't recognized by this file's tsc
    var LL3 = new LinkedList(), num1 : number = 0, num2 : number = 0, curr1 = LL1.head, curr2 = LL2.head;

    while (curr1) {
        num1 *= 10;
        num1 += curr1.val;
        curr1 = curr1.next;
    }

    while (curr2) {
        num2 *= 10;
        num2 += curr2.val;
        curr2 = curr2.next;
    }

    num1 = reverse(num1);
    num2 = reverse(num2);
    let num3 : number = num1 + num2;

    if (num1 === 0 && num2 === 0) {
        let newNode = new Node();  // we don't pass in the value of '0' since the way Node() is setup, it already initializes new nodes to the value of 0 and points to null by default
    }

    while (num3 > 0) {
        let newNode = new Node(num3 % 10);

        if (!LL3.head) {
            LL3.head = newNode;
        } else {
            let curr = LL3.head;

            while (curr && curr.next) {
                curr = curr.next;
            }

            curr.next = newNode;
        }

        num3 = Math.floor(num3 / 10);
    }

    function reverse (num : number) : number {
        let temp = 0;

        while (num > 0) {
            temp *= 10;
            temp += num % 10;
            num = Math.floor(num /10);
        }

        return temp;
    }

    return LL3;
}

function main () {
    var num1 : number = Number(prompt("Enter the first number : ")), num2 : number = Number(prompt("Enter the second number : ")), LL1 = new LinkedList(), LL2 = new LinkedList();

    while (num1 > 0) {
        let temp = new Node(num1 % 10);

        if (!LL1.head) {
            LL1.head = temp;
        } else {
            let curr = LL1.head;

            while (curr && curr.next) {
                curr = curr.next;
            }

            curr.next = temp;
        }

        num1 = Math.floor(num1 / 10);  // not sure whether we need to use 'Math.floor()' with % or not. As far as I understand, we don't need to.
    }

    while (num2 > 0) {
        let temp = new Node(num2 % 10);

        if (!LL2.head) {
            LL2.head = temp;
        } else {
            let curr = LL2.head;

            while (curr && curr.next) {
                curr = curr.next;
            }

            curr.next = temp;
        }

        num2 = Math.floor(num2 / 10);
    }

    var result = addTwoNumbers(LL1,LL2);  // since we pass the very first nodes of the linked lists, we cannot use linkedlist properties/methods such as printList() or getSize() in the function addTwoNumbers() (we would have to pass in the LinkedLists too, not just their head nodes if we wish to use linked lists's methods and properties) (nvm, I changed it)

    LL1.printList();
    LL2.printList();
    console.log(`The sum of the above two numbers : `);
    result.printList();  // for this LOC to work, we would have to return a LinkedList(s) from the function `addTwoNumbers` instead of a node(s)
}

if (require.main === module) {
    main();
}

/*
Learnings :- 

    1. At LOC 5, we could've used 'const var_name = require(); too. But then we would have to call those classes with the var_name such
     as : var LL1 = new var_name.LinkedList();

    2. If we want to use LinkedList methods(.printList() , getSize() etc) and properties within the function `addTwoNumbers`, then we would have
     to pass the LinkedList itself instead of just the head of the linkedlist

    3. We cannot typecheck(atleast in the traditional way) variables which store Nodes and LinkedLists since 'LinkedList' and 'Node' aren't recognized 
    by this file's tsc
    Note :- We can use 'Node' to typecheck, but this 'Node' refers to some other class which is pre-defined. I understood this, when tsc raised an error 
    saying that var_containing_a_node doesn't have a 'val' property. Maybe this error is raised since it might've been pre-defined in tsc/js as .value 
    instead of .val
*/