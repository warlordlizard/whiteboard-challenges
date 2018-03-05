'use strict';

const enqueue = require('../solution.js');

const exampleQueue = {
  0: 'apple',
  1: 'pear',
  2: 'banana',
  next: 0,
  length: 3
}
describe('Enqueue', function() {
  describe('with valid inputs', function() {
    it('should increase length by one and be equal to input', function(done) {
      enqueue(exampleQueue, 'kiwi');
      expect(exampleQueue.length).toEqual(4);
      expect(exampleQueue[3]).toEqual('kiwi');
      done();
    });
  });
});