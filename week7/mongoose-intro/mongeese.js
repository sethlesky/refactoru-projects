var mongoose = require('mongoose');

// similar to use
mongoose.connect('mongodb://localhost/allYourCandataBaseCorn');

// Create schema
var candySchema = mongoose.Schema({
  name          : {type: String, required: true},
  email         : {type: String, unique: true},
  highFructose  : {type: Boolean, default: true},
  nuts          : Boolean,
  calories      : Number,
  sweetness     : Number,
  bestFriend    : String
});

var Candy = mongoose.model('Candy', candySchema);

var heathBar = new Candy({
  name         : 'Heath Bar',
  highFructose : false,
  nuts         : true,
  calories     : 1020,
  sweetness    : 7.65,
  bestFriend   : 'Cadbury Egg'
})

heathBar.save(function(err, data) {
  console.log(err, data);
});

Candy.find({calories: {$gt:500}}, function(err, data) {
  console.log(err, data);
})

// mongoose.connection.close();
// .find
// .findOne
// .update
// .save
