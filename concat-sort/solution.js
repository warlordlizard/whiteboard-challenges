function consort(arr1, arr2) {
  let res = [];
  for (var i = 0; i < arr1.length; i++) {
    res.push(arr1[i])
  }
  for (var i = 0; i < arr2.length; i++) {
    res.push(arr2[i])
  }
  return res.sort(function (a, b) {return a - b})
}