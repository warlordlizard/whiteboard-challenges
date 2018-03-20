class Node {
  constructor(val) {
    this.val= val;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size ++;
    return this.top;
  }
  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }
  peek() {
    return this.top;
  }
  getMin() {
    let current = this.top;
    this.min = current.val;
    console.log('before', this.min)
    while(current.next !== null) {
      if(current.val < this.min) {
        this.min = current.val;
        console.log('during', this.min)
      }
      current = current.next;
    }
    return this.min;
  }
}
module.exports = {Node, Stack}

let testStack = new Stack();
testStack.push(13);
testStack.push(-13);
testStack.push(1);
testStack.push(4);
testStack.push(2);
testStack.push(-3);
testStack.push(3);
testStack.push(-30);

console.log('teststack', testStack)
// testStack.pop();
console.log('teststack', testStack)
console.log('teststack peek', testStack.peek())
console.log('teststack getmin', testStack.getMin())