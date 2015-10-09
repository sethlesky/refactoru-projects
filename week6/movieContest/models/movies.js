var allMovies = [];

var Movie = function(movieData){

  this.name = movieData.name;
  this.url = movieData.url;
  this.title = movieData.title;
  this.description = movieData.description;
  allMovies.push(this)
}


module.exports = {

  allMovies : allMovies,
  Movie     : Movie

}
