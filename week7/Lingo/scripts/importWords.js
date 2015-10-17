var fs = require('fs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/translation');

// put this in model
var wordSchema = mongoose.Schema({
    word: String
});

var Word = mongoose.model('Word', wordSchema);

fs.readFile('./dict.txt', 'utf8', function(err, data) {

  var words = data.split('\n');
  words.forEach(function(word) {
    console.log(word);
    var word = new Word({ word: word});
    word.save(function(err, result) {
      console.log(err, result);
    })
  });

})




