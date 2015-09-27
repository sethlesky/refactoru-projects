var Iguana = function(name, color, bulgyEyes, tubbiness) {
	this.name = name;
	this.color = color;
	this.bulgyEyes = bulgyEyes;
	// this.eat = function() {
	// 	console.log('nom');
	// 	console.log(this);
	// }

	Iguana.count = Iguana || 0;
	Iguana.count++;
}

// new keyword returns value of this automatically
var cc = new Iguana('CC', 'red', true, true);
var herbert = new Iguana('herb', 'green', false, false);


Iguana.prototype.eat = function() {
	console.log(this.name + " is eating");
}

console.log(cc);

console.log(cc.hasOwnProperty('eat'));



console.log(cc);
console.log(herbert);

var Quote = function(text, author) {
	this.text = text || 'to be or not to be...';
	this.author = author || 'shakespeare';
}

var q = new Quote('get swifty!', 'rick');
var p = new Quote();

console.log('-=-=-=-=-=-= Challenge 2 =-=-=-=-=-=-');

Quote.prototype.wordCount = function() {
	return this.text.split(' ').length;
}

Quote.prototype.yell = function() {
	console.log(this.text.toUpperCase() + '!!');
}

q.yell();
console.log(q.wordCount());







console.log(q,p);


