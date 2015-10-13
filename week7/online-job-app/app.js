// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/omegastudio');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Models
var applicantSchema = mongoose.Schema({
  name    : {type: String},
  bio     : {type: String},
  skills  : {type: String},
  years   : {type: Number},
  why     : {type: String}
});

var Applicant = mongoose.model('Applicant', applicantSchema);

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// get list of applicants
app.get('/getapps', function(req, res) {
  Applicant.find({}, function(err, data) {
    res.send(data);
  })
});

// get list of applicants
app.post('/deleteapp', function(req, res) {
  console.log('deleting', req.body);
  Applicant.remove({_id: req.body._id}, function(err, data) {
    // res.redirect('/applicants');
    console.log('deleted');
    res.send('done');
  })
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database

  var applicant = new Applicant({
    name    : req.body.name,
    bio     : req.body.bio,
    skills  : req.body.skills,
    years   : req.body.years,
    why     : req.body.why
  })

  applicant.save(function(err, data) {
    console.log(err, data);
    res.redirect('/applicants');
  });

	// res.send('No funciona');
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
