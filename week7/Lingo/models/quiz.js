var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var wordSchema = mongoose.Schema({
  word   : {type : String}
});

var quizSchema = mongoose.Schema({
  language : {type : String},
  words    : [{type : Schema.ObjectId, ref : 'Word'}]
});

var Word = mongoose.model('Word', wordSchema);
var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {
  Word : Word,
  Quiz : Quiz
}



