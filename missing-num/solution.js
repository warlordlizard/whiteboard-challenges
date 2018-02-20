'use strict';

function missing(arr) {
  var res = 0
  for(var i= 1; i <= 100; i++) {
    if(!arr.includes(i)) {
      res = i;
    };
  };
  console.log(res);
  return res;
};

var test = [];
for(var j = 1; j < 100; j++) {
  test.push(j);
}
// console.log(test)
missing(test)