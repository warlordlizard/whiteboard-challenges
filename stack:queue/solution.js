class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 1048) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }
  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }
  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp.val;
  }
}

class Queue {
  constructor() {
    this.frontStack = new Stack();
    this.backStack = new Stack();
  }
  enqueue(val) {
    this.frontStack.push(val);
  }
  dequeue() {
    if (this.backStack.size === 0) {
      while (this.frontStack.size > 0) {
        let val = this.frontStack.pop()
        this.backStack.push(val)
      }
    }
    let popped = this.backStack.pop();
    return popped;
  }
}




let q = new Queue();
q.enqueue(4);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);

// console.log('Queue: frontStack', q.frontStack)

// console.log('deque 4', q.dequeue());
// console.log('deque 3', q.dequeue());
// console.log('deque 2', q.dequeue());
// console.log('deque 1', q.dequeue());
// console.log('Queue: frontStack after deque', q.frontStack)
// console.log('Queue: backStack', q.backStack)

module.exports = {
  'Queue': Queue,
  'Node': Node,
  'Stack': Stack,
}
