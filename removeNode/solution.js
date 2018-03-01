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

  removeNode(list, val) {
    let current = list.root;
    let prev = {}
    while(current !== null) {
      if(current.data === val) {
        prev.next = current.next;
        return list;
      }
      prev = current;
      current = current.next;
    }
    if(val === undefined) throw new Error('no number entered');
  }

  toString() {
    let result = ''
    let current = this.root;
    while (current != null) {
      result += current.data + ' -> '
      current = current.next;
    }
    result += 'null'
    return result;
  }
}

let list = new LinkList();
list.prepend(88)
list.append(64)
list.append(63)
list.append(65)
list.append(42)
list.append(12)
list.append(35)

console.log('list:', list.toString())

console.log('removeNode 12:', list.removeNode(list, 12).toString())



module.exports = {
  'LinkNode': LinkNode,
  'LinkList': LinkList
}
