var letterCapitalize = function(str) {
	var strArr = str.split(" ");
	var out = [];
	for (var i = 0; i < strArr.length; i++) {
		out.push(strArr[i][0].toUpperCase() + strArr[i].slice(1,strArr[i].length));
	}

	return out.join(" ");
};

console.log(letterCapitalize("hi there ya"));

var wordCount = function(str) {
	return str.split(" ").length;
};

console.log(wordCount("one two three"));

var primeTime  = function(n) {
	for (var i = 2; i < n/2; i++) {
		if (n%i === 0) {
			return false;
		}
	}
	return true;
};

console.log(primeTime(11));