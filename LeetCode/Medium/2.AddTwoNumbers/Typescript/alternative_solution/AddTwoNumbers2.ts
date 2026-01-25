import * as PromptSync from 'prompt-sync';
const prompt : any = PromptSync({sigint : true});

// not sure whether the order in which we export and import functions matter ?
const { Node, LinkedList } = require('../../../2058.FindTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints/Javascript/FindTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints');

function addTwoNumbers(LL1,LL2) {
    var LL3 = new LinkedList(), result : number = 0, carry : number = 0, curr1 = LL1.head, curr2 = LL2.head, dummy = new Node(0), curr3 = dummy;

    while (curr1 || curr2 || carry) {
        result = carry;

        if (curr1) {
            result += curr1.val;
            curr1 = curr1.next;
        }

        if (curr2) {
            result += curr2.val;
            curr2 = curr2.next;
        }

        carry = Math.floor(result / 10);
        curr3.next = new Node(result % 10);
        curr3 = curr3.next;
    }

    LL3.head = dummy.next;
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

    1. At LOC 5, we could've used 'const var_name = require(); too. But then we would have to call those classes with the var_name such as : var LL1 = new var_name.LinkedList();

    2. If we want to use LinkedList methods(.printList() , getSize() etc) and properties within the function `addTwoNumbers`, then we would have to pass the LinkedList itself instead of just the head of the linkedlist

    3. At LOCs 8,24 and 25, we had to create a lone node(save it in a variable to retain it's staring point) and add nodes to it. After that at LOC 27, we connect it to the LinkedList. The issue occurred because the reference to the start of the result linked list was lost while iterating; keeping a dummy head node and returning dummy.next preserves the correct head of the list.
    */