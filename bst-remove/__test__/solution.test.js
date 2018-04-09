const remove = require('../solution.js');

const testBst = {
  root: {
    value: 10,
    left: {
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
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: {
          value: 8,
          left: null,
          right: null,
        },
      },
    },
    right: {
      value: 11,
      left: null,
      right: null,
    }
  }
}


describe('testing pre-Order find', () => {
  it('should return 6', () => {
    let temp = remove(testBst, 5);
    expect(temp.root.left.value).toEqual(6);
  })
  it('should return null', () => {
    let temp = remove(testBst, 5);
    expect(temp.root.left.right.left).toEqual(null);
  })
})
