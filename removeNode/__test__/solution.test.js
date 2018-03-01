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

describe('Remove node LinkList', function () {
  describe('with a valid input', function () {
    it('should return a linklist with removed node', function (done) {

      let removedNodeList = list.removeNode(list, 12);
      expect(typeof (list)).toEqual('object');
      done();
    })
    it('should return a list equal to var expResList', function (done) {
      let easyList = new LinkList();
      easyList.prepend(1)
      easyList.append(2)
      easyList.append(3)
      easyList.append(4)
      let remNodeEasyList = easyList.removeNode(easyList, 2);

      var expResList = { "root": { "data": 1, "next": { "data": 3, "next": { "data": 4, "next":  null } } } } 
      expect(expResList).toEqual(remNodeEasyList);
      done();
    })
    
  })
  describe('with an invalid input', function () {
    it('should throw an error', function (done) {
      expect(() => {
        list.removeNode(list);
      }).toThrow()
      done();
    })
  })
})