'use strict';

function List() {
  console.log('arguments', arguments);
  for (let idx in arguments) {
    this[idx] = arguments[idx];
  }
  this.length = arguments.length;
}


List.prototype.copy = function () {
  let copy = new List();
  for (let prop in this) {
    copy[prop] = this[prop]
  }
  return copy;
}

List.prototype.push = function (value) {
  let copy = this.copy();
  copy[copy.length++] = value;
  return copy;
}

List.prototype.pop = function () {
  let copy = this.copy();
  for (var i = 0; i < copy.length; i++) {
    let lastValue = copy[copy.length - 1];
    console.log(lastValue);
    delete copy[copy.length - 1];
    copy.length--
    return copy;
  }
  return copy;
}


var list = new List(10, 20, 30, 1, 2, 3, 5, 6, 55);
var newList = list.copy();
var pushedList = list.push(40);
var poppedList = list.pop();
console.log('copied list:', newList);
console.log('pushed list:', pushedList);
console.log('popped list', poppedList)
console.log('last pair in object', list[list.length - 1])