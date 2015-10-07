var addNumbers = function(str) {
    var i = 0;
    var num = '';
    var numArr = [];
    while (i < str.length) {
	if (isNaN(str[i])) {
	    if (num.length != 0) numArr.push(num);
	    num = '';
	} else {
	    num += str[i];
	}
	i++;
    }
    if (num.length != 0) numArr.push(num);
    //console.log(numArr);
    var sum = numArr.reduce(function(inc, x) {
	return Number(inc) + Number(x);
    },0);
    return sum;
}

console.log(addNumbers('he3yhe99y8a99a88f9'));
