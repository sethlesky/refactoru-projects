var movieModel = require('../models/movies.js');

// Export so we can access methods in app.js
module.exports = {

  addMovie : function(req, res){
    // Use req.body to create a new costume
    var movie = new movieModel.Movie(req.body)
    console.log(movieModel.allMovies)

    res.send(movieModel.allMovies)

  },

  getMovies : function(req, res){
    res.send(movieModel.allMovies)
  },

  voteForMovie : function(req, res) {
    console.log('index', req.body.index);
    res.send('hi');
    movieModel.allMovies[req.body.index].votes++;
    console.log(movieModel.allMovies[req.body.index]);
  }

}
