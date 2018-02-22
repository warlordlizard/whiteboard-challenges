'use strict';

let one = [3, 7, 1, 6];
let two = [22, 13, 2, 67];
function concat(arr1, arr2) {
  let res = [];
  let sortedArr = [];

  for (var i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    res.push(arr2[i]);
  }
  console.log('original arrays:', one, two);
  console.log('res before sort:', res);
  for (var i = 0; i < res.length; i++) {
    var low = Math.min.apply(null, res);
    sortedArr.push(low);
    res.splice(res.indexOf(low), 1, 1000);
  }
  return sortedArr;
}
console.log('final:', concat(one, two))