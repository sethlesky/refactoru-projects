var fs = require('fs');

fs.readFile('./input.csv', 'utf8', function(err, data){
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

  console.log(JSON.stringify(arr));

})
