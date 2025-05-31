const mongoose = require("mongoose")

const dbCon = async () => {
await mongoose.connect("mongodb+srv://DaianaLopez:9L1L2ZXryAGFiHFG@movie-app.ignw961.mongodb.net/Movies-App")
};

module.exports = dbCon;