
function tripleFive() {
	for (var i = 0; i < 3; i++) {
		console.log("Five!");
	}
}

console.log(tripleFive());

function lastLetter(arg) {
	return arg[arg.length-1];
}

console.log(lastLetter('hello'));
console.log(lastLetter('island'));

function square(x) {return x*x};

console.log(square(2));

function negate(x) {return -x};

console.log(negate(6));

function toArray(arg1, arg2, arg3) {
	return [arg1, arg2, arg3];
}

console.log(toArray(1,2,3));

function startsWithA(str) {
	if (str[0].toUpperCase() === 'A') {
		return true;
	}
	else {
		return false;
	}
}

console.log(startsWithA('Aasdf'));

function excite(str) {
	return str + '!!!';
}

console.log(excite("asdf"));

function sun(str) {
	str = str.toLowerCase();
	if(str.indexOf('sun') !== -1) {
		return true;
	} else {
		return false;
	}
}

console.log(sun('sundry'));

function tiny(num) {
	return (num > 0 && num < 1)
}

console.log(tiny(2.3));

function getSeconds(time) {
	var time = time.split(':');
	return +time[0] * 60 + +time[1];
}

console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));