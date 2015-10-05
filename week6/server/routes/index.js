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





module.exports = router;
