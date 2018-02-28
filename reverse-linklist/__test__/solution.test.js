'use strict';

const { LinkNode, LinkList } = require('../solution.js');

let list = new LinkList();
list.prepend(88)
list.append(64)
list.append(63)
list.append(65)
list.append(42)
list.append(12)
list.append(35)

describe('Reverse LinkList', function() {
  describe('with a valid input', function() {
    it('should return a reversed linklist', function(done){

      let reversedList = list.reverseList(list);
      expect(typeof(list)).toEqual('object');
      done();
    })   
    it('should return a list equal to var revList', function (done) {
      let easyList = new LinkList();
      easyList.prepend(1)
      easyList.append(2)
      easyList.append(3)
      easyList.append(4)
      let revEasyList = easyList.reverseList(easyList);
      
      var revList = { "root": { "data": 4, "next": { "data": 3, "next": { "data": 2, "next": { "data": 1, "next": null } } } } } 
      expect(revEasyList).toEqual(revList);
      done();
    })
    it('should be a number', function (done) {
      let result = list.root.data;
      expect(typeof result).toBe('number');
      done();
    });
  })
  describe('with an invalid input', function() {
    it('should throw an error', function(done) {
      expect( () => {
      let errorList = list.reverseList(13);
      }).toThrow();
      done();
    })
  })
})