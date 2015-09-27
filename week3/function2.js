

var getName = function(obj) {
	return obj.name;
}
console.log(getName({ name: 'Luisa', age: 25 }));

var totalLetters = function(arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		total += arr[i].length;
	}
	return total;
}

console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));

var keyValue = function(arg1, arg2) {
	var out = {};
	out[arg1] = arg2;
	return out;
}

console.log(keyValue('city', 'Denver'));

var negativeIndex = function(arr, n) {
	for (var i = arr.length; i > arr.length+n; i--) {}
	return arr[i];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

var removeM = function(str) {
	var out = '';
	for (var i = 0; i < str.length; i++) {
		if (str[i] != 'm') {
			out += str[i];
		}
	}
	return out;
}

console.log(removeM('masdfmm'));
console.log(removeM('memory'));

var printObject = function(obj) {
	for (var key in obj) {
		console.log(key + " is " + obj[key]);
	}
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

var vowels = function(str) {
	var v = ['a', 'e', 'i', 'o', 'u'];
	var out = [];
	for (var i = 0; i < str.length; i++) {
		if (v.indexOf(str[i]) !== -1) {
			out.push(str[i]);
		}
	}
	return out;
}

console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));

var twins = function(arr) {
	for (var i = 0; i < arr.length; i = i+2) {
		if (arr[i] !== arr[i+1]) {
			console.log(arr[i], arr[i+1]);
			return false;
		}
	}
	return true;
}

console.log(twins([2,2,3,3,5,5,6,6]));

// var or = function(bools) {
// 	var out = false
// 	bools.forEach(function(bool) {
// 		if (bool) {
// 			console.log(bool);
// 			return true;
// 		}
// 	})
// 	return out;
// }

var or = function(bools) {
	for (var i = 0; i < bools.length; i++) {
		if (bools[i]) return true;
	}
	return false;
}

console.log(or([false,true]));

var unique = function(arr) {
	var out = [];
	arr.forEach(function(item) {
		if (out.indexOf(item) === -1) {
			out.push(item);
		}
	})
	return out;
}

console.log(unique(['a','adsf','hi', 'a', 'asdf']));