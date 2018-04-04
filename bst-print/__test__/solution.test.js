const preOrder = require('../solution.js');

const testBst = {
  root: {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
    right: {
      value: 6,
      left: null,
      right: null,
    }
  }
}

describe('testing pre-Order traversal', () => {
  it('should return array of [5, 2, 1, 3, 6]', () => {
    let temp = preOrder(testBst);
    let compare = [5, 2, 1, 3, 6]
    console.log(temp);
    expect(temp).toEqual(compare);
  })
})