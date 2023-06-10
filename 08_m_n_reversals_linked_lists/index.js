// Given a linked list and numbers m and n, return it back with only positions m to n in reverse

// Constraints
// Will m and n always be within the bounds of the linked list?: Yes, assume 1 <= m <= n <= length of linked list
// Can we receive m and n values for the whole linked linked list?: Yes, we can receive m = 1 and n = length of linked list

// Test cases
// linkedList = 1->2->3->4->5->null  m = 2  n = 4    1->4->3->2->5->null
// linkedList = 1->2->3->4->5->null  m = 1  n = 5    5->4->3->2->1->null
// linkedList = 5->null              m = 1  n = 1    5->null
// linkedList = null                 m = 0  n = 0    null