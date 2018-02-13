'use strict';

function maxNums(arr) {
  if (Array.isArray(arr) === false) throw new Error('this is not an array');
  if (!arr) throw new Error('no array entered');
  
  return {
    highest: arr.sort((a,b) => b -a)[0],
    secHighest: arr.sort((a,b) => b-a)[1]
  }
}
console.log(maxNums([1, 2, 3, 4, 5, 6]))
console.log(maxNums([1,3,7]))