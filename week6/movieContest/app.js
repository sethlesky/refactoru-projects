// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
var movieController = require('./controllers/movieController')

app.get('/', function(req, res){
  res.sendFile('/html/home.html', {root : './public'})
});

app.get('/getmovies', movieController.getMovies)
app.post('/addmovie', movieController.addMovie);

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
