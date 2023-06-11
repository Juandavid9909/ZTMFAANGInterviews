// Given a linked list return true if there is a cycle inside the list or false if it doesn't.

// Constraints
// Can a doubly linked list have multiple child list nodes?: Yes, every list node can have multiple levels of children
// What do we do with child properties after flattening?: Just set the child property value to null

// Test cases
// linkedList = 1-2-3-4-5-6-null
//                |     |
//                7-8-9 12-13
//                  |
//                  10-11
// result = 1-2-7-8-10-11-9-3-4-5-12-13-6-null

// O(n) - O(n)
const findCycle = (head) => {
    let currentNode = head;
    const seenNodes = new Set();

    while (!seenNodes.has(currentNode)) {
        if (!currentNode?.next) {
            return false;
        }

        seenNodes.add(currentNode);
        currentNode = currentNode.next;
    }

    return true;
}

// O(n) - O(1)
const findCycleFloyd = (head) => {
    let hare = head;
    let tortoise = head;

    while(true) {
        hare = hare.next;
        tortoise = tortoise.next;

        if(!hare || !hare.next) {
            return false;
        }
        else {
            hare = hare.next;
        }

        if(tortoise === hare) {
            break;
        }
    }

    let p1 = heaed;
    let p2 = tortoise;

    while(p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;

    return true;
}