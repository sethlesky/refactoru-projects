var express = require('express');
var router = express.Router();
var fs = require('fs');
fs.readFile('data.txt', function(err, data){
    // do something with data here
    /* GET home page. */
    router.get('/', function(req, res, next) {
      // res.render('index', { title: 'Express' });
      res.header('Content-Type', 'text/html');
      res.send(data);
    });
});

router.get('/form', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.header('Content-Type', 'text/html');
  res.render('form', { title: 'Form'} );
});

router.get('/success', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.header('Content-Type', 'text/html');
  // res.render('form', { title: 'Form'} );
  res.send('wooooooop wooooop');
});


router.post('/formsubmit', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.header('Content-Type', 'text/html');
  // res.render('form', { title: 'Form'} );
  res.redirect('/success')
});




module.exports = router;
