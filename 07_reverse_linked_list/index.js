// Given a linked list, return it in reverse.

// Constraints
// What do we return if we get null or a single node?: Just return null and the node back respectively

// Test cases
// linkedList = 1->2->3->4->5->null    5->4->3->2->1->null
// linkedList = 3->null                3->null
// linkedList = null                   null

// O(n) - O(1)
const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;

        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}