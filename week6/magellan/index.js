var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var places = {'seville':0, 'canaryislands':1, 'capeverde':2, 'straightofmagellan':3, 'guam':4, 'philippines':5};
var reverseMap = {};
for (var key in places) {
    if (places.hasOwnProperty(key)) {
        reverseMap[places[key]] = key;
    }
}


var port = 4000;
app.listen(port, function() {
  console.log('Server running on port ' + port);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.get('/next', function(req, res) {
  // res.sendFile(req.params.location + '.html', {root: './public'});
  console.log(req.query.location);
  // var nextPlace = places[]
  var placeIndex = places[req.query.location];
  console.log(reverseMap[placeIndex+1]);
  res.send(JSON.stringify(
    {
      location: req.query.location,
      nextLocation: reverseMap[(placeIndex+1)%6]
    }))
});

app.get('/:location', function(req, res) {
  res.sendFile(req.params.location + '.html', {root: './public'});
  console.log(req.params);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  console.log(req.originalUrl);
  res.status(404).send('Magellan didnt go to ' + req.originalUrl.substring(1));
});
