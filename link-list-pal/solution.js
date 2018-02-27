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
    while (current !== null) {
      if (index === val) {
        return current.data;
      }
      current = current.next;
      index++;
    }
  }

  findnthFromLast(list, nth) {
    let count = 0;
    let current = list.root;
    while (current !== null) {
      current = current.next;
      count++;
    }
    let totalCount = count;
    console.log('totalcount:', totalCount)
    count = 0
    current = list.root;
    while (current !== null) {
      if (count === (totalCount - nth)) {
        return current;
      }
      current = current.next;
      count++;
    }
    return undefined;
  }

  palindrome(list) {
    let arr = [];
    let revArr = [];

    let current = this.root;
    while (current !== null) {
      arr.push(current.data);
      revArr.push(current.data);
      current = current.next;
    }
    arr = arr.toString()
    revArr = revArr.reverse().toString(); 
    console.log('arr:', arr)
    console.log('revarr:', revArr);
    if (arr == revArr) {
      return true;
    } else {
      return false;
    }
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

let list2 = new LinkList();
list2.prepend(88)
list2.append(64)
list2.append(88)

console.log('pal', list.palindrome(list))
console.log('pal', list2.palindrome(list2))