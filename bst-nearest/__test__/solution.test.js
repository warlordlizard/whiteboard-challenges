const nearest = require('../solution.js');

const testBst = {
  root: {
    value: 100,
    left: {
      value: 50,
      left: {
        value: 20,
        left: {
          value: 10,
          left: null,
          right: null,
        },
        right: {
          value: 30,
          left: null,
          right: null,
        },
      },
      right: {
        value: 70,
        left: {
          value: 60,
          left: null,
          right: null,
        },
        right: {
          value: 80,
          left: null,
          right: null,
        },
      },
    },
    right: {
      value: 110,
      left: null,
      right: null,
    }
  }
}




describe('testing nearest find', () => {
  it('should return 50', () => {
    let temp = nearest(testBst, 42);
    expect(temp).toEqual(50);
  })
  it('should return 70', () => {
    let temp = nearest(testBst, 65);
    expect(temp).toEqual(70);
  })
})