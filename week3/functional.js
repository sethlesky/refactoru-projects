console.log(_);

// Start: Read The F'in Documentation
// Goal: R.T.F.D

var start = "Read the F'in Documentation";
var goal = "R.T.F.D";

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);


var out = _.reduce(start.split(' '), function(memo, num){ return memo + num[0].toUpperCase() + '.'; }, '');

console.log(sum);
console.log(out);

var tubers = [
	{
		name  : 'Sweet Potatoes',
		colors : ['Orange', 'Navajowhite', 'Purple', 'Burlywood']
	},
	{
		name  : 'Peruvian Blue Potatoes',
		colors : ['Purple','Burlywood', 'Red', 'Peruvian Blue']
	},
	{
		name  : 'Purple Fingerling Potatoes',
		colors : ['Purple', 'Black', 'Hammock', 'Goldenrod']
	}
]

var found =  _.find(tubers, function(tuber) {
	if (tuber.color == 'Purple') {
		return tuber;
	}
})

console.log(found);

tubers.forEach(function(tuber) {
	if (tuber.color == 'Purple') {
		console.log(tuber);
	}	
})

console.log(_.pluck(tubers, 'color'));
console.log(_.pluck(tubers, 'name'));

console.log(_.uniq(_.pluck(tubers, 'color')));


// Chaining underscore methods
var out = _.chain(tubers)
			.pluck('color')
			.uniq()
			.value();

console.log(out);

// Goal unique colors

console.log('=-=-=-=-=-=-=');

var out = _.chain(tubers)
			.pluck('colors')
			.flatten()
			.uniq()
			.value();

console.log(out);