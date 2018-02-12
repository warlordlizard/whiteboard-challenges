var arr = [11, 17, 49, 55, 74, 16];

var challenge = function (arr) {
  var results = {
    high: Math.max.apply(null, arr),
    low: Math.min.apply(null, arr),
    avg: arr.reduce(function (a, b) { return a + b }) / arr.length
  }
  return results;
}
challenge(arr);
