
var palindrome = function(str) {
	var arr = str.split('');
	while (arr.length > 1) {
		if (arr.pop() != arr.shift()) return false
	}
	return true;
}

var dashInsert = function(n) {
	var arr = n.toString().split('');
	arr = arr.map(function(i) {
		return Number(i);
	})
	var out = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] % 2 != 0 && arr[i-1] % 2 != 0) {
			out += '-' + arr[i];
		} else {
			out += arr[i];
		}
	}
	return out;
}

console.log(dashInsert(557772255));