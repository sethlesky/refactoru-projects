var alphabetSoup = function(str) {
  var arr = str.split('');
  arr.sort(function(a,b){
    return a > b;
  });
  return arr;
}

console.log(alphabetSoup('cbaazqagiI'));

var vowelCount = function(str) {
  var vowels = ['a','e','i','o','u'];
  var count = 0;
  str.split('').forEach(function(c) {
    if (vowels.indexOf(c) != -1)
      count++;
  })
  return count;
}

console.log(vowelCount('asdefvjjjjjjj'));
