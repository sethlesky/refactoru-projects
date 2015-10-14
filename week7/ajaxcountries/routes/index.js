var express = require('express');
var router = express.Router();

var countries = require('../models/countries.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ajax Countries' });
});

router.get('/countries', function(req, res, next) {
  res.send({countries: countries});
});

router.post('/search', function(req, res, next) {
  console.log('search: ', req.body.search);

  var found = [];
  countries.forEach(function(country){
    if (country.name.match(req.body.search)) {
      console.log(country.name);
      found.push(country);
    }
  })
  res.send(found);
});


module.exports = router;
