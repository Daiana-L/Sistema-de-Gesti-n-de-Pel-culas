const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const validateInfo = require("../middlewares/validateInfo");

router.post("/crear-mi-pelicula",validateInfo, movieController.createMovie);
module.exports = router;
