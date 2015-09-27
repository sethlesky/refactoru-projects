console.log('\n1\n');

for (var i = 0; i <= 500; i += 100) {
	console.log(i);
}

for (var i = 0; i <= 500; i++) {
	if (i % 100 === 0) {
		console.log(i);
	}
}

console.log('\n2\n');

for (var i = 1; i <= 64; i *= 2) {
	console.log(i);
}

console.log('\n3\n');

for (var i = 1; i <= 9; i++) {
	if (i <= 3) {
		console.log(1);
	} else if (i <= 6) {
		console.log(2);
	} else {
		console.log(3);
	}
}

console.log('\n4\n');

for (var i = 0; i <= 10; i +=2 ) {
	console.log(i);
}

for (var i = 3; i <= 15; i += 3) {
	console.log(i);
}

for (var i = 9; i >= 0; i--) {
	console.log(i);
}

console.log('\n\n');
for (var i = 0; i <= 11; i++) {
	console.log(i%4);
}