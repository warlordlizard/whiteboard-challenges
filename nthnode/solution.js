function findnthFromLast(list, nth) {
    let count = 0;
    let current = list.root;
    while( current !== null ) {
      current = current.next;
      count++;
    }
    let totalCount = count;
    console.log('totalcount:', totalCount)
    count = 0
    current = list.root;
    while ( current !== null ) {
      if (count === (totalCount - nth)) {
        return current;
      } 
      current = current.next;
      count++;
    }
    return undefined;
  }
}