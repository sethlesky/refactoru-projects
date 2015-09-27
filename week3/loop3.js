var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

students.forEach(function(student) {
	console.log(student.age);
})

var line = function() {
	console.log('=-=-=-=-=-=-=-=-=-');
}

line();

students.forEach(function(student) {
	console.log(student.name + ', ' + student.city);
})

line();

students.forEach(function(student) {
	if(student.name == "Liz" || student.name == "Trent" || student.name == "Chelsea")
		console.log(student.name + " is from " + student.city);
});

line();

students.forEach(function(student) {
	if (student.age > 25)
		console.log(student.name + " is older than " + 25);
})