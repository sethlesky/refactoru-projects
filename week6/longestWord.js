var longestWord = function(str) {
    var longestWord = '';
    var words = str.split(' ');
    console.log(words);
    words.forEach(function(word) {
	if (word.length > longestWord.length) {
	    longestWord = word;
	}
    });
    return longestWord;

}

console.log(longestWord('hi there asdfg qwert'));
