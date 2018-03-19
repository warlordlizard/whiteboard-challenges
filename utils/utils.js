class Array {
  constructor(arr) {
    this.arr = arr;
  }
  map(callback) {
    let mappedArr = [];
    for (let i = 0; i < this.length; i++) {
      mappedArr.push(callback(this[i]))
    }
    return mappedArr;
  }
  filter(cb) {
    let filteredArr = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])) {
        filteredArr.push(this[i]);
      }
    }
  }
  reduce(cb, start) {
    let current = start;
    for(let i = 0; i< this.length; i++) {
      current =+ callback(current, this[i])
    }
    return current;
  }
}

module.exports = {
  'map': Array.map,
  'filter': Array.filter,
  'reduce': Array.reduce
}

let arr = [1,2,3,4,5];
let wArr = ['dog','cat','mouse']

console.log('map',arr.map(x => x+1 ))
console.log('filter', arr.filter(x => x > 2))
console.log('reduce', arr.reduce((a,b) => a+b))
console.log('reduce', wArr.reduce((a, b) => a + b))