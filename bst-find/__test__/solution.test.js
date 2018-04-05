const preOrderFind = require('../solution.js');

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

describe('testing pre-Order find', () => {
  it('should return true', () => {
    let temp = preOrderFind(testBst, 2);
    expect(temp).toEqual(true);
  })
  it('should return false', () => {
    let temp = preOrderFind(testBst, 9);
    expect(temp).toEqual(false);
  })
})
