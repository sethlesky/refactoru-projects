var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

for (var i = 0; i < animals.length-1; i++) {
	console.log(animals[i]);
}

console.log("\n---\n");

for (var i = 0; i < animals.length; i = i + 2) {
	console.log(animals[i]);
}

console.log("\n---\n");

for (var i = animals.length-1; i >= 0; i--) {
	console.log(animals[i]);
}

console.log("\n---\n");

for (var i = 0; i < animals.length; i++) {
	if (i == 0 || i == animals.length-1) {
		console.log(animals[i]);
	} else {
		console.log(animals[i]);
		console.log(animals[i]);		
	}

}