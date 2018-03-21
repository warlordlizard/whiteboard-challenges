'use strict';

const r = require ('../solution.js')

let words = ['sup', 'dad', 'tree', 'snake', 'pet'];
let expectedResult = ['dad', 'tree', 'pet'];

describe('Rowcheck function', () => {
  it('should return expected result', () => {
    expect(r.rowCheck(words)).toEqual(expectedResult);
  })
})