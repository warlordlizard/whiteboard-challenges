'use strict';

var testArr1 = ['mike', 'sue', 'tom', 'kathy', 'henry'];
var testArr2 = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];

var intersect = function (arr1, arr2) {
  let result = [];
  arr1.forEach(name => {
    if (arr2.includes(name)) {
      result.push(name);
    };
  });
  return result;
};

console.log(intersect(testArr1, testArr2));