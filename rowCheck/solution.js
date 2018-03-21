function rowCheck(arr) {
  let rowOne = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  let rowTwo = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  let rowThree = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  let result = [];
  let row;
  for(let i = 0; i < arr.length; i++) {
    if(rowOne.indexOf(arr[i][0]) > -1) {
      row = rowOne;
    }
    if (rowTwo.indexOf(arr[i][0]) > -1) {
      row = rowTwo;
    }
    if (rowThree.indexOf(arr[i][0]) > -1) {
      row = rowThree;
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (row.indexOf(arr[i][j]) < 0) {
        break;
      } else if (j === arr[i].length -1) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
module.exports = {rowCheck}
let words = ['sup', 'dad', 'tree', 'snake', 'pet'];
