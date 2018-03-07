'use strict'

const howManyOnes = require('../solution.js')

let exampleArr = [0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1 ,0, 1, 1]

describe('Consecutive Ones Function', () => {
  describe('with valid input', () => {
    it('should return highcount matching consecutive ones', () => {
      let example = howManyOnes(exampleArr);
      expect(example).toEqual(5); 
    })
    it('should return a number', () => {
      let example = howManyOnes(exampleArr);
      expect(typeof example).toEqual('number');
    })
  })
})