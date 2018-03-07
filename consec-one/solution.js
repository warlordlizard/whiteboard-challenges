module.exports = function howManyOnes (arr) {
  var count = 0
  var highCount = 0
  for(var i=0; i< arr.length; i++) {
    if(arr[i] === 1) {
      count ++
      if (count > highCount) highCount = count
    }
    if (arr[i] === 0) count = 0
  }
  return highCount
}