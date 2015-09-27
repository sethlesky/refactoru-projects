var Burglar = function(name, which) {
	this.name =	name + which;
	this.dexterity = Math.ceil(Math.random() * 10);
	this.ninja = this.ninja > 7;
	this.stuff = ['diamonds', 'cash', 'guns', 'dagger of +3 dexterity', 'glass eyeball']
}

var steve = new Burglar('Steve', 4, false);
var dan = new Burglar('Dan', 10, true);
console.log(steve, dan);

// Object constructor function
// console.log(steve.constructor);
// console.log(Burglar.prototype);
// console.log(Burglar.__proto__);

Burglar.prototype.burgle = function(victim) {
	this.stuff.push(victim.stuff.pop());
	console.log(this.name + ' now has ' + this.stuff);
	console.log(victim.name + ' now has ' + victim.stuff);	
}

var cityOfTheives = [];
for (var i = 0; i < 10; i++) {
	cityOfTheives.push(new Burglar('steve', i))
}

// console.log(cityOfTheives);




// steve.burgle(dan);
// steve.burgle(dan);
// steve.burgle(dan);
// dan.burgle(steve);

var randomBurgle = function() {
	var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)];
	var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)];	
	burglar.burgle(victim);
}



