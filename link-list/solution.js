class LinkNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.root = null;
  }
  prepend(val) {
    let newNode = new LinkNode(val);
    newNode.next = this.root;
    this.root = newNode;
  }
  append(val) {
    let newNode = new LinkNode(val, null);
    let current = this.root;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  find(val) {
    let index = 0;
    let current = this.root;
    while ( current !== null ) {
      if( index === val) {
        return current.data;
      }
      current = current.next;
      index++;
    }
  }
}

let list = new LinkList();
list.prepend(88)
list.prepend(64)
list.prepend(42)
list.prepend(12)
list.append(35)
console.log(list);
console.log(list.find(0))
console.log(list.find(1))
console.log(list.find(2))
console.log(list.find(3))
console.log(list.find(4))