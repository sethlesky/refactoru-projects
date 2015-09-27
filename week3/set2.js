var firstReverse = function(str) {
	var arr = str.split('');
	var out = '';
	while (arr.length) {
		out += arr.pop();
	}
	return out;
}

console.log(firstReverse('asdf'));

console.log('----');

var swapCase = function(str) {
	var str = str.split('');
	var out = str.map(function(c) {
		if (c.toLowerCase() == c) {
			return c.toUpperCase();
		} else {
			return c.toLowerCase();
		}
	})
	return out.join('');
}

console.log(swapCase('aAdD'));

var mostRepeatedLetter = function(word) {
	var freq = {};
	var wordArr = word.split('');

	wordArr.forEach(function(c) {
		freq[c] = word.split(c).length - 1;
	})

	var currentMax = 0;
	for (var x in freq) {
		if (freq[x] > currentMax) {
			currentMax = freq[x];
		}
	}
	return currentMax;
}

var letterCount = function(str) {
	var arr = str.split(' ');
	var freq = [];
	arr.forEach(function(word) {
		freq[word] = mostRepeatedLetter(word);
	})

	var currentMax = 0;
	var longestWord;
	for (var x in freq) {
		if (freq[x] > currentMax) {
			currentMax = freq[x];
			longestWord = x;
		}
	}
	console.log(currentMax);

	if (currentMax == 1) {
		return -1;
	}
	return longestWord;
}

console.log(letterCount('Today, is the greast dayy ver!'));

