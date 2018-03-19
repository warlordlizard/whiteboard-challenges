const {map, filter, reduce} = require('../utils.js');

let testArr = [1,2,3,4,5]
describe('map', () => {
  it('should return a mapped array', () => {
    let result = testArr.map(x => x+1);
    expect(result).toEqual([2,3,4,5,6]);
    expect(result.length).toEqual(5);
    expect(typeof result).toEqual('object');
  })
})
describe('filter', () => {
  it('should return filtered array', () => {
    let result = testArr.filter(x => x > 2);
    expect(result).toEqual([3,4,5]);
    expect(result.length).toEqual(3);
    expect(typeof result).toEqual('object');
  })
})
describe('reduce', () => {
  it('should return reduced array to single value number', () => {
    let result = testArr.reduce((a,b) => a+b);
    expect(result).toEqual(15);
    expect(typeof result).toEqual('number');
  })
  it('should return reduced array to single value string', () => {
    let wordArr = ['dog', 'cat', 'mouse']
    let result = wordArr.reduce((a, b) => a + b);
    expect(result).toEqual('dogcatmouse');
    expect(typeof result).toEqual('string');
  })
})
