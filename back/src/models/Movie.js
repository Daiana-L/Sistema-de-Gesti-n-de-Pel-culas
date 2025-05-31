const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
        title: {
        type: String,
    },
        year: {
        type: Number,
    },
        director: {
        type: String,
    },
        duration: {
        type: String,
    },
        genres: {
        type: [String],
    },
        rating: {
        type: Number,
    },
        poster: {
        type: String,
        
}});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;