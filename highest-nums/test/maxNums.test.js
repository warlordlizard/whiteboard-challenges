'use strict';

const maxNums = require('../solution.js');
const assert = require('assert');

describe('Max nums check', function() {
  describe('#maxNums', function() {
    it('should return object with 2 highest nums', function() {
      var result = maxNums([1,3,7]);
      assert.ok(result === {highest: 7, secHighest: 3}, 'not equal to object literal')
    });
    it('should throw an error if no arr is entered', function() {
      assert.throws(function() {
        maxNums(); 
      },'no array entered');
    });
    it('should throw an error if other data type is entered', function() {
      var result = maxNums('some string');
      assert.throws(function() {
        maxNums('some string');
      },'this is not an array');
    })
  })
})