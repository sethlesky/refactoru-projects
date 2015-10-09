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
  }

}
