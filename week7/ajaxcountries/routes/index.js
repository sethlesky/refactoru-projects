var express = require('express');
var router = express.Router();

var countries = require('../models/countries.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ajax Countries' });
});

router.get('/countries', function(req, res, next) {
  console.log('test route');
  // send back countries.json
  res.send({countries: countries});
});


module.exports = router;
