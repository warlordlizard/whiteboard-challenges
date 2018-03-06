'use strict';

const { Node, Stack, Queue} = require('../solution.js');

describe('Enqueue', function () {
  describe('with valid inputs', function () {
    it('should increase length by one and be equal to input', done => {
      let examplequeue = new Queue();
      examplequeue.enqueue(4);
      examplequeue.enqueue(3);
      examplequeue.enqueue(2);
      examplequeue.enqueue(1);
      expect(examplequeue.frontStack.size).toEqual(4);
      examplequeue.enqueue(5);
      expect(examplequeue.frontStack.size).toEqual(5);
      done();
    });
  });
});
describe('Dequeue', function() {
  it('should return the first node in queue when dequeued', done => {
    let examplequeue = new Queue();
    examplequeue.enqueue(4);
    examplequeue.enqueue(3);
    examplequeue.enqueue(2);
    examplequeue.enqueue(1);
    expect(examplequeue.frontStack.top.val).toEqual(1);
    expect(examplequeue.dequeue()).toEqual(4);
    done();
  });
});