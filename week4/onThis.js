var whatsMyName = function(excited) {
	var ending = excited ? '!!' : '.';
	console.log('My name is ' + this.name + ending);

}

var alice = {
	name: 'Alice',
}

// force this to be alice, instead of window
// arguments offset by one

// map.call on string or agruments array
whatsMyName.call(alice, true);

// [].map.call('hello', function(ele) {
// 	return ele.toUpperCase()
// })

// takes array of arguments
whatsMyName.apply(alice, [true]);

// Math.max.apply(null, myNumbers)

// Call and apply call the original function, and return
// whatever that function returns.

// bind returns a NEWfunction with its 'this' context
// permanently bound
var bob = {
	name : 'Bob'
}

// all refs to this is bob, returns a function
var bobSaysHi = whatsMyName.bind(bob);
bobSaysHi();

var p = [].pop.bind([1,2,3]);
console.log(p())
console.log(p())

