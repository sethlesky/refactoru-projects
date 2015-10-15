// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  // res.send('Hello')
  res.sendFile('translate.html', {root: './public/html/'});
});

app.post('/translate', function(req, res) {
  // console.log(req.body);
  request('https://www.googleapis.com/language/translate/v2?q='
           + req.body.text + '&target=' + req.body.targLang
           + '&format=text&source=' + req.body.srcLang
           + '&key=AIzaSyCP5tXQ5CBps_hwVs5s9kQqOg91VVCUjc4'
    ,function(error, response, body) {
      if (!error) {
        console.log(body);
        res.send(body);
      }
    })
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
