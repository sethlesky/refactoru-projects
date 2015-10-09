var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){
  var arr = [];
  var lines = data.split('\n');
  var header = lines.shift().split(',');

  lines.forEach(function(line) {
    if (line) {
      var data = line.split(',');
      var obj = {};
      data.forEach(function(item, i) {
        obj[header[i]] = item;
      })
      arr.push(obj);
    }
  })
  fs.writeFile(process.argv[3], JSON.stringify(arr), function(err, data){
    console.log('file written');
  })
});


