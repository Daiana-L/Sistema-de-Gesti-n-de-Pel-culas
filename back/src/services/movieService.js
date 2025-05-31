const Movie = require("../models/Movie");

module.exports = {
getMovies: async () => {
    const movies = await Movie.find();
    return movies;
},
createMovie: async (movies) => {
const newMovie = await Movie.create(movies);
return newMovie;
}};
