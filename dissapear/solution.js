'use strict';

var array = [1, 2, 4, 5, 7, 10];

function dissapears(arr) {
  var maxNum = Math.max.apply(null, arr);
  var test = [];
  var res = [];

  for(var i = 1; i <= maxNum; i++) {
    test.push(i);
  };
  console.log(test)

  for(var j = 0; j < test.length; j++) {
    if(!arr.includes(test[j])) {
      res.push(test[j]);
    };
  };
  console.log(res)
  return res;
};

dissapears(array)

