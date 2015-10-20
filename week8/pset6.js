

var timeConvert = function(num) {
  var hours = Math.floor(num / 60);
  var min   = num % 60;
  return hours + ":" + min;
}

console.log(timeConvert(66))

var removeDups = function(arr) {
  var unique = [];
  arr.forEach(function(item) {
    if (unique.indexOf(item) == -1) {
      unique.push(item);
    }
  })
  return unique;
}

var secondGreatLow = function(arr) {
  var arr = removeDups(arr.sort());
  if (arr.length > 2)
    return arr[1] + ' ' + arr[arr.length-2];
  else
    return arr[1] + ' ' + arr[0]
}

// console.log(secondGreatLow([5,2,8,9,9,9,9]));
// console.log(removeDups([1,1,1,4]));




