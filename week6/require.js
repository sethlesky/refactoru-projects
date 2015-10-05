var data = require('./example.js');
var fs = require('fs'); //filesystem built in

console.log(data);

// read file
var text = fs.readFileSync('./example.js', 'utf-8');
console.log(text);

fs.writeFileSync('example_copy.txt', text);
