// Implement the class Queue using stacks. The queue methods you need to implement are enqueue, dequeue, peek and empty

// enqueue: append a value to the end of the queue

// dequeue: Remove the value at the start of the queue

// Peek: Return the value at the start of the queue

// empty: Return a boolean value of wheter the queue is empty or not

// Constraints
// Do the queue methods we have to implement need to perform at the same complexity of a real queue?: No, but they should be as performant as possible

// O(n) space complexity
class QueueWithStacks {
    constructor() {
        this.in = [];
        this.out = [];
    }

    // O(1)
    enqueue(val) {
        this.in.push(val);
    }

    // O(n)
    dequeue() {
        if (this.out.length === 0) {
            while (this.in.length) {
                this.out.push(this.in.pop());
            }
        }

        return this.out.push();
    }

    // O(n)
    peek() {
        if (this.out.length === 0) {
            while (this.in.length) {
                this.put.push(this.in.pop());
            }
        }

        return this.out[this.out.length - 1];
    }

    // O(1)
    empty() {
        return this.in.length === 0 && this.out.length === 0;
    }
}