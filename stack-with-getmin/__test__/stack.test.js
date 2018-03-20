'use strict';

const {Stack, Node} = require('../stack.js')

describe('Stack methods', function() {
  describe('#getMin', () => {
    it('should return smallest val in stack', () => {
      let testStack = new Stack();
      testStack.push(13);
      testStack.push(-13);
      testStack.push(1);
      testStack.push(4);
      testStack.push(2);
      testStack.push(-3);
      testStack.push(3);
      testStack.push(-30);
      let result = testStack.getMin();
      expect(result).toEqual(-30);
    })
  })
  describe('#push', () => {
    it('should push a val to the stack', () => {
      let testStack = new Stack();
      let result = testStack.push(33);
      expect(result.val).toEqual(33);
    })
  })
  describe('#pop', () => {
    it('should pop off top val', () => {
      let testStack = new Stack();
      testStack.push(55);
      testStack.push(33);
      let result = testStack.pop();
      expect(result.val).toEqual(33);
    })
  })
  
  describe('#peek', () => {
    it('should return val off top of stack', () => {
      let testStack = new Stack();
      testStack.push(55);
      let result = testStack.peek();
      expect(result.val).toEqual(55);
    })
  })
})

