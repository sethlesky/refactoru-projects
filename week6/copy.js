var fs = require('fs');

var from = fs.readFileSync(process.argv[2], 'utf-8');
fs.writeFileSync(process.argv[3], from);

