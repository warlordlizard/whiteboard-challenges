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

  reverseList(list) {
    if(typeof(list) !== 'object') throw new Error();
    let arr = [];
    
    let current = this.root;
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    arr.reverse();
    current = this.root;
    for( var i = 0; i < arr.length; i++) {
      current.data = arr[i];
      // while (current.next !== null) {
        current = current.next;
      // }
    }
    return list;
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
console.log('reversedlist:', list.reverseList(list).toString())
// console.log('reversedlist:', list.reverseList(poop))



module.exports = {
  'LinkNode': LinkNode,
  'LinkList': LinkList
}
