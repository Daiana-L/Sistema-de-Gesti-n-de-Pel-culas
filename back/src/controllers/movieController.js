const moviesService = require("../services/movieService")

module.exports ={
getAllMovies: async (req, res) =>{
const movies = await moviesService.getMovies();
res.status(200).json(movies);
},
createMovie: async (req, res)=>{
    const {title,year,director,duration,genres,rating,poster} = req.body;
    const newMovie = await moviesService.createMovie({  
        title,
        year,
        director,
        duration,
        genres,
        rating,
        poster});
    res.status(201).json(newMovie);
}

};